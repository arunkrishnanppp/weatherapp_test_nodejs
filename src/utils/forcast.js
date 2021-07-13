const request = require("request");

const forcast = (place, callback) => {
  console.log("frocast call");
  const url = `http://api.weatherstack.com/current?access_key=71243724167c59b0e80dc07952e36609&query=${place}`;

  // request(optionobject, callback);
  console.log(url);
  request(
    {
      url: url,
      json: true,
    },
    (error, response) => {
      //   console.log(error);

      if (error) {
        console.log("NOT ABLE TO CONNECTS")
        callback("NOT ABLE TO CONNECT TO WAETHER SERVER", undefined);
      } else if (response) {
        if (response.body.success == false) {
          callback("Please try with other location");
        } else {
          // console.log(response.body);
          callback(undefined, response.body.current);
        }
      }
    }
  );
};

module.exports = forcast;
