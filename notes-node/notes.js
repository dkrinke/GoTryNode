const fs = require('fs');

var isUnique = (notes, title) => {

	return (notes.filter((note) => note.title === title)).length === 0;
};

var fetchNotes = () => {
	
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(error) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {

	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	if (isUnique(notes, note.title)) {
		notes.push(note);
	    saveNotes(notes);
		return note;	
	}

	return 'Note must have a unique title';

};

var getAll = () => {

	var notes = fetchNotes();

	return notes;
};

var getNote = (title) => {

	var notes = fetchNotes();

	var filteredNotes = notes.filter((note) => note.title === title);

	if (filteredNotes.length > 0) {
	    return filteredNotes[0];
	}

	return 'Note not found';
};

var removeNote = (title) => {

	var notes = fetchNotes();

	var filteredNotes = notes.filter((note) => note.title !== title);

	if (filteredNotes.length < notes.length) {
		saveNotes(filteredNotes);
	    return 'Removed ' + title;
	}

	return 'Note not found';
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};