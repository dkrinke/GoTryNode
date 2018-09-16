// var sqaure = (x) => {
// 	var result = x * x;
// 	return result;
// };

var sqaure = x => x * x;
console.log(sqaure(9));

var user = {
	name: 'Daniel',
	sayHi: () => { //Use if you do not need this or arguments key words
		console.log(arguments); //Prints the global arguments variable
		console.log(`Hi. I'm ${this.name}`); //Has no concept of this
	},
	sayHiAlt () {
		console.log(arguments); //Prints the local arguments variable (this)
		console.log(`Hi. I'm ${this.name}`); //Prints this.name
	}
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);