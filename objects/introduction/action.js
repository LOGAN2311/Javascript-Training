let obj = {
	firstName: 'Logaprakash',
	lastName: 'Natarajan',
	age: 26,
	email: 'logaprakash.n@gmail.com',
	phone: 8778450612,
	bloodGroup: 'A+',
	skills: ["HTML", "CSS", "JS"],
	newskills: function(){
		return this.skills.push("Wordpress");
	},
	mail: function(){
		return `The email address is ${this.email}.`;	
	},
	mobile: function(){
		return `The mobile number is ${this.phone}.`;	
	},
	fullName: function(){
		return this.firstName + " " + this.lastName;
	},
	address: {
		street:  '03, Second Cross Street',
		state: 'Puducherry',
		pincode: 605009,
	}
};

console.log(obj.mail());
console.log(obj.mobile());
console.log(obj.skills);
console.log(obj.fullName());
console.log(obj.newskills());
