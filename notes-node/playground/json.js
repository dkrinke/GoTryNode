// var obj = {
// 	name: 'Daniel'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Daniel", "age": 27}';
// console.log(typeof personString);
// console.log(personString);
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var noteJson = JSON.parse(noteString); 
console.log(typeof noteJson);
console.log(noteJson);
console.log(noteJson.title)
