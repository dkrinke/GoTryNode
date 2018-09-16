const request = require('request');
const fs = require('fs');
const yargs = require('yargs');

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

var mapQuestKey = fs.readFileSync('mapquest-key.txt');
var encodedAddress = encodeURIComponent(argv.address);

request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=${encodedAddress}`,
	json: true
}, (error, response, body) => {

	const location = body.results[0].locations[0];

	const street = location.street;
	const city = location.adminArea5;
	const state = location.adminArea3;
	const postalCode = location.postalCode;
	const country = location.adminArea1

	const latitude = location.latLng.lat;
	const longitude = location.latLng.lng;

	console.log(`Address: ${street}, ${city}, ${state} ${postalCode}, ${country}`);
	console.log(`Latitude: ${latitude}`);
	console.log(`Longitude: ${longitude}`);
});
