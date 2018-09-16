const request = require('request');
const fs = require('fs');

var mapQuestKey = fs.readFileSync('mapquest-key.txt');

request({
	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapQuestKey}&location=1301%20lombard%20street%20philadelphia`,
	json: true
}, (error, response, body) => {
	console.log(body);
});
