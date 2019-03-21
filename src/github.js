const fetch = require("node-fetch").default;
const ProgressBar = require("progress");
const { requestLocation } = require("./google-maps");
const { argv, cache } = require("./utils");

const requestOptions = {
  headers: {
    Authorization: "token " + argv.githubToken
  }
};

const getGeolocation = stargazer => {
  return fetch(stargazer.url, requestOptions)
    .then(res => res.json())
    .then(stargazer => requestLocation(stargazer.location));
};

module.exports.getStargazers = url =>
  fetch(url, requestOptions)
    .then(res => Promise.all([res.headers, res.json()]))
    .then(([headers, arr]) => {
      const nextPage = headers
        .get("link")
        .split(",")
        .reduce((url, link) => {
          const match = link && link.match(/<([^>]+)>; rel="next"/);
          if (match) url = match[1];
          return url;
        }, "");

      if (nextPage) {
        return module.exports
          .getStargazers(nextPage)
          .then(nextArr => [...arr, ...nextArr]);
      }

      return arr;
    });

module.exports.getGeoLocations = stargazers => {
  const progress = new ProgressBar(":bar", {
    total: stargazers.length,
    clear: true
  });
  return Promise.all(
    stargazers.map((stargazer, i) => {
      if (cache.stargazer[stargazer.login]) {
        progress.tick();
        return cache.stargazer[stargazer.login];
      }

      return new Promise(resolve => {
        setTimeout(resolve, i * 100);
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
