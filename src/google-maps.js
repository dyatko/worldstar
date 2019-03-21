const { argv, cache } = require("./utils");

const googleMapsClient = require("@google/maps").createClient({
  key: argv.googleToken
});

module.exports.requestLocation = address => {
  if (!address) return Promise.resolve({});

  address = address.toLowerCase();

  if (cache.location[address]) {
    return Promise.resolve(cache.location[address]);
  }

  return new Promise(resolve => {
    googleMapsClient.geocode({ address }, (err, response) => {
      const location = {};

      if (!err) {
        const result = response.json.results && response.json.results[0];

        if (result) {
          Object.assign(location, {
            location: result.geometry.location,
            country: result.address_components
              .reverse()
              .find(comp => comp.long_name && comp.long_name.match(/[a-z]/)),
            address: result.formatted_address
          });
        }

        cache.location[address] = location;
      }

      resolve(location);
    });
  });
};
