console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('Daniel'));

var filteredArray = _.uniq(['Daniel',1,'Daniel',1,2,3,4]);
console.log(filteredArray);

// var user = os.userInfo();

// var sum = notes.add(9,-2);

// console.log(sum);

// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });
