/*---06.07.2021---
//Variable Declaration
var a;
//Variable Assignment
a= 5;
//Camel Casing
var firstName;

var a = 10; 
var b = 15; 
c = a+b;
console.log(c); 

//Function Declaration
function firstName(){
	
}


var x = 11;
var y = 12;

//Addition
function addition(){
	z = x + y;
}

//Subtraction
function subtraction(){
	a = y - x;
}

//Multiplication
function multiplication(){
	b = x * y;
}

//Division
function division(){
	c = x / y;
}

//Modulus
function modulus(){
	d = x % y;
}


addition();
subtraction();
multiplication();
division();
modulus();

console.log("The value of addition is:" +z);
console.log("The value of subtraction is:" +a);
console.log("The value of multiplication is:" +b);
console.log("The value of division is:" +c);
console.log("The value of modulus is:" +d);
*/

/*---07.07.2021---*/

/*
//Function 
var a = 20;
var b = 10;

function addition(){
	var c = a+b;
	document.getElementById("demo").innerHTML = "The value of addition	is: " + c;
}

function subtraction(){
	var d = a-b;
	document.getElementById("demo").innerHTML = "The value of subtraction is: " + d;
}


function multiplication(){
	var e = a*b;
	document.getElementById("demo").innerHTML = "The value of multiplication is: " + e;
}


function division(){
	var f = a/b;
	document.getElementById("demo").innerHTML = "The value of division is: " + f;
}

function modulus(){
	var g = a%b;
	document.getElementById("demo").innerHTML = "The value of modulus  is: " + g;
}
*/

/*
//Passing Parameters
var firstName = "Loga";
var lastName = "Prakash";

function fullName(firstName, lastName){
	var	fullName = firstName + lastName;
	document.getElementById("name").innerHTML = "The Name of the candidate is:	" + fullName;
	
}
fullName(firstName, lastName);


//User Parameters
var a, b;

function getValue(){
	a = Number(document.getElementById("data").value);
	b = Number(document.getElementById("data1").value);
}

function add(){
	getValue();
	var c = a+b;
	document.getElementById("data2").value = c;
}
function sub(){
	getValue();
	var d = a-b;
	document.getElementById("data2").value = d;
}
function mul(){
	getValue();
	var e = a*b;
	document.getElementById("data2").value = e;
}
function div(){
	getValue();
	var f = a/b;
	document.getElementById("data2").value = f;
}
function mod(){
	getValue();
	var g = a%b;	
	document.getElementById("data2").value = g;
}



//08.07.2021

//Greater than 2 numbers

function greaterBetween(){
	a = Number(document.getElementById("value1").value);
	b = Number(document.getElementById("value2").value);
	if(a>b){
		document.getElementById("result").innerHTML = "The Result is a is greater than b";
	}
	else{
		document.getElementById("result").innerHTML = "The Result is b is greater than a";
	}
}

//Random Numbers

function randomNumbers(){
	var a = document.getElementById("ran").innerHTML = Math.round(Math.random());
	var image = document.getElementById("image");
	if(a==1){
		document.getElementById("res").innerHTML = "Rain";
		image.src="rain.jpg";
	}
	else{
		document.getElementById("res").innerHTML = "No Rain";
		image.src="no-rain.jpg";
	}
}


//Button Clicking

var click = 1;
function myFunction() {
  document.getElementById("demo").innerHTML = click++;
}

//User Number Multiplication

var a, b, c, d, image;

function multi(){
	a = Number(document.getElementById("ran1").value);
	b = Number(document.getElementById("ran2").value);
	c = a * b;
	d = Number(document.getElementById("ran3").value);
	image = document.getElementById("image");
		
	if(c == d){
		document.getElementById("result1").innerHTML = "Answer is correct";
		image.src="correct.jpg";
	}
	else{
		document.getElementById("result1").innerHTML = "Answer is not correct";
		image.src="incorrect.jpg";
	}
}
*/

//Random Number Multiplication

var a, b, c, d, image;
	image = document.getElementById("image");
	
function randomGeneration(){
	a = document.getElementById("ran1").innerHTML = Math.floor(Math.random()*11)+1;
	b = document.getElementById("ran2").innerHTML = Math.floor(Math.random()*11)+1;
	}
randomGeneration();

var click = 1;
var click1 = 1;

function score() {
	if(c == d){
		e = document.getElementById("sc1").innerHTML =   click++;
	}
	else{
		f = document.getElementById("sc2").innerHTML = click1++;
	}
	document.getElementById("totalscore").innerHTML = "Total Score: " + e;
}

function multi(){
	c = a * b;
	//console.log("products"+c);
	d = Number(document.getElementById("ran3").value);
	//console.log("input"+d);
	
	if(c == d){
		document.getElementById("result1").style.backgroundColor = '#00ff00';
		document.getElementById("result1").innerHTML = "Answer is Correct";
		image.src="correct.jpg";
		//console.log("Answer correct");
	}
	else{
		document.getElementById("result1").style.backgroundColor = '#ff0000';
		document.getElementById("result1").innerHTML = "Answer is Wrong";
		image.src="incorrect.jpg";
		//console.log("Answer incorrect");
	}
	randomGeneration();
	score();
	document.getElementById("ran3").value = "";
}

