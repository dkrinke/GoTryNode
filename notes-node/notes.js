console.log('Starting note.js')

const fs = require('fs');

var addNote = (title, body) => {

	var notesString = fs.readFileSync('notes-data.json');

	var notes = JSON.parse(notesString);

	var note = {
		title,
		body
	};

	notes.push(note);

	fs.writeFileSync('notes-data.json', JSON.stringify(notes));

	return note;

};

var getAll = () => {
	var notesString = fs.readFileSync('notes-data.json');

	var notes = JSON.parse(notesString);

	return notes;
};

var getNote = (title) => {
	var notesString = fs.readFileSync('notes-data.json');

	var notes = JSON.parse(notesString);

	for (var i = 0; i < notes.length; i++){
    	var note = notes[i];

	    if (note.title === title) {
	    	return note;
	    }
	}

	return;
};

var removeNote = (title) => {
	var notesString = fs.readFileSync('notes-data.json');

	var notes = JSON.parse(notesString);

	for (var i = 0; i < notes.length; i++){
    	var note = notes[i];

	    if (note.title === title) {
	    	notes.splice(i, 1);
			fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	    	return note;
	    }
	}

	return;
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}