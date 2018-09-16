var person = {
	name: 'Daniel'
};

person.age = 27;

debugger; //This creates a line break here (c to skip to here)

person.name = 'Mike';

console.log(person);


// node inspect debugging.js OR node --inspect-brk (chrome://inspect/#devices)
// list(10) => prints 10 lines above and below where we are paused
// n => moved on to the next statement
// c => continues on until the program completes
// repl => moves you to repl mode (Ctrl + C to exit back to debug) Can manipulate person here