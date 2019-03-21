const fetch = require("node-fetch").default;
const ProgressBar = require("progress");
const { requestLocation } = require("./google-maps");
const { argv, cache } = require("./utils");

const requestOptions = {
  headers: {
    Authorization: "token " + argv.githubToken
  }
};
const maxPages = Math.ceil(argv.max) / 100;
let numberOfPages = 0;
let numberOfRequests = 0;
let remainingRequests = Infinity;

const getGeolocation = stargazer => {
  return fetch(stargazer.url, requestOptions)
    .then(res => Promise.all([res.json(), res.headers]))
    .then(([stargazer, headers]) => {
      remainingRequests = headers.get("x-ratelimit-remaining");
      return requestLocation(stargazer.location);
    });
};

module.exports.getStargazers = url => {
  numberOfPages++;
  console.clear();
  console.log(`Fetching page ${numberOfPages} out of maximum ${maxPages}`);

  return fetch(url, requestOptions)
    .then(res => Promise.all([res.headers, res.json()]))
    .then(([headers, arr]) => {
      remainingRequests = headers.get("x-ratelimit-remaining");

      const nextPage = headers
        .get("link")
        .split(",")
        .reduce((url, link) => {
          const match = link && link.match(/<([^>]+)>; rel="next"/);
          if (match) url = match[1];
          return url;
        }, "");

      if (nextPage && numberOfPages < maxPages && remainingRequests) {
        return module.exports
          .getStargazers(nextPage)
          .then(nextArr => [...arr, ...nextArr]);
      }

      return arr;
    });
};

module.exports.getGeoLocations = stargazers => {
  const progress = new ProgressBar(
    "Locating stargazer :current out of :total :bar",
    {
      total: stargazers.length,
      clear: true
    }
  );

  console.clear();
  return Promise.all(
    stargazers.map(stargazer => {
      if (!remainingRequests) {
        progress.terminate();
        console.warn("No GitHub requests left for this hour!");
        return {};
      }

      if (cache.stargazer[stargazer.login]) {
        progress.tick();
        return cache.stargazer[stargazer.login];
      }

      return new Promise(resolve => {
        numberOfRequests++;
        setTimeout(resolve, numberOfRequests * 100);
      }).then(() => {
        progress.tick();
        return getGeolocation(stargazer).then(location => {
          cache.stargazer[stargazer.login] = location;
          return location;
        });
      });
    })
  );
};
