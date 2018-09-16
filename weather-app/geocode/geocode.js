
const fs = require('fs');
const request = require('request');

var geocodeAddress = (address, callback) => {
	var mapQuestAPIKey = fs.readFileSync('./keys/mapquest-api-key.txt');
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestAPIKey}&location=${encodedAddress}`,
		json: true
	}, (error, response, body) => {
		
		if (error) {
			callback('Unable to connect to the mapquest server');
		} else { //Mapquest returns status code 0 for all requests...
			
			const location = body.results[0].locations[0];

			const street = location.street;
			const city = location.adminArea5;
			const state = location.adminArea3;
			const postalCode = location.postalCode;
			const country = location.adminArea1

			const formattedAddress = `${street}, ${city}, ${state} ${postalCode}, ${country}`;
			const latitude = location.latLng.lat;
			const longitude = location.latLng.lng;


			callback(undefined, {
				formattedAddress,
				latitude,
				longitude
			});
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;