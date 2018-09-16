const fs = require('fs');
const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.formattedAddress);
		var forecastAPIKey = fs.readFileSync('./keys/forecast-api-key.txt');
		request({
		url: `https://api.darksky.net/forecast/${forecastAPIKey}/${results.latitude},${results.longitude}`,
		json: true
	}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				console.log(JSON.stringify(body.currently.temperature));
			} else {
				console.log('Unable to fetch weather data from the Forecast.io server.');
			}
		});
	}
});
