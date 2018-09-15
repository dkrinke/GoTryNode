console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
	case 'list':
		console.log(notes.getAll());
		break;
	case 'add':
		console.log(notes.addNote(argv.title, argv.body));
		break;
	case 'read':
		console.log(notes.getNote(argv.title));
		break;
	case 'remove':
		console.log(notes.removeNote(argv.title));
		break;
	default:
		console.log('Command not recognized');
}