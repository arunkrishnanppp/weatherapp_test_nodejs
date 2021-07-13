const request = require("request");

const geocode = (place, callback) => {
  const limit = 1;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYnVlbmhvbWJlciIsImEiOiJja3FxYjFjenowb2RiMnBuYml4M2p0bG4yIn0.lnbcH-HPbLCTGNWTdtbSSQ&limit=${limit}`;

  request({ url, json: true }, (error, response) => {
    // console.log("ERROR:", error, "RESPONSE", response.body);
    if (error) {
      callback("Noty able to connect to weather service", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length == 0) {
      callback("Unable to find location  try another search", undefined);
    } else {
      callback(undefined, response);
    }
  });
};

const revgeocoding = (lat, long, callback) => {
  const limit = 1;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
    (lat, long)
  }.json?access_token=pk.eyJ1IjoiYnVlbmhvbWJlciIsImEiOiJja3FxYjFjenowb2RiMnBuYml4M2p0bG4yIn0.lnbcH-HPbLCTGNWTdtbSSQ&limit=${limit}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Noty able to connect to weather service", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length == 0) {
      callback("Unable to find location  try another search", undefined);
    } else {
      const placename = response.body.features[0].place_name.split(",");
      callback(undefined, placename.pop());
    }
  });
};

console.log("calling");

module.exports = { geocode, revgeocoding };
