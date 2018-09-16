const fs = require('fs');
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
	var forecastAPIKey = fs.readFileSync('./keys/forecast-api-key.txt');
	request({
		url: `https://api.darksky.net/forecast/${forecastAPIKey}/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather data from the Forecast.io server.');
		}
	});
};

module.exports.getWeather = getWeather;