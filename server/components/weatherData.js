const request = require("request");

const OpenWeatherMap = {
  apiKey: process.env.WEATHER_API_KEY,
  baseUrl: process.env.WEATHER_API_URL,
};

const weatherData = (address, callback) => {
  const url =
    OpenWeatherMap.baseUrl +
    encodeURIComponent(address) +
    "&appid=" +
    OpenWeatherMap.apiKey;
  console.log(url);

  request({ url, json: true }, (err, response) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      callback(new Error(`Status Code ${response.statusCode}`), null);
    } else {
      callback(null, response.body);
    }
  });
};

module.exports = weatherData;
