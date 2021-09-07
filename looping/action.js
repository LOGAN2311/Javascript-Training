/*
//Increment from 1 to 10 by while loop
var a = 1;
var txt = "";
while(a < 11){
	document.getElementById("demo").innerHTML = txt += "<br>While Loop: The number is " + a;
	a++;
}

//Increment from 1 to 10 by do while loop
var b = 1;
var txt = "";
do{
	document.getElementById("demo1").innerHTML = txt += "<br>Do While Loop: The number is " + b;
	b++;
}
while(b < 11);

//Increment from 1 to 10 by for loop
var txt = "";
for(var i = 1; i < 11; i++){
	document.getElementById("demo2").innerHTML = txt += 
	"<br>For Loop: The Number is " + i;
}

//Decrement from 10 to 1 by while loop
var c = 10;
var txt = "";
while(c > 0){
	document.getElementById("demo3").innerHTML = txt +=
	"<br>While Loop: The Number is " + c;
	c--;
}

//Decrement from 10 to 1 by do while loop
var d = 10;
var txt = "";
do{
	document.getElementById("demo4").innerHTML = txt +=
	"<br>Do While Loop: The Number is " + d;
	d--;
}
while(d > 0);

//Decrement from 10 to 1 by for loop
var txt = "";
for(var j = 10; j > 0; j--){
	document.getElementById("demo5").innerHTML = txt +=
	"<br>For Loop: The Number is " + j;
}


//print odd number by for loop
var num = 10;
var txt = "";
for (let k=1; k<num; k++) {
    if(k % 2 !== 0) {
      document.getElementById("demo6").innerHTML = txt +=
	  "<br>Odd Numbers: The Number is " + k;
    }
} 

//print even number by for loop
var num = 10;
var txt = "";
for (let l=0; l<num; l++) {
    if(l % 2 === 0) {
      document.getElementById("demo7").innerHTML = txt += "<br>Even Numbers: The Number is " + l;
    }
} 
*/

//Table Multiplication

var a, b;
var txt = "";
var i = 1;

function inputValue(){
	a = Number(document.getElementById("value1").value);
	b = Number(document.getElementById("value2").value);
}

function inputResult(){
	inputValue();
	if ( a % 2 == 0) {
	document.getElementById("display1").innerHTML ='You Entered An Even Number';
	}else{
	document.getElementById("display1").innerHTML ='You Entered An Odd Number';
	}
	if ( b % 2 == 0) {
	document.getElementById("display2").innerHTML ='You Entered An Even Number';
	}else{
	document.getElementById("display2").innerHTML ='You Entered An Odd Number';
	}
}

function primeNumber1(){
	inputValue();
	let isPrime = true;
	if (a === 1) {
    console.log("1 is neither prime nor composite number.");
	}
	else if (a > 1) {
		for (let i = 2; i < a; i++) {
			if (a % i == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			console.log(`a is a prime number`);
		} else {
			console.log(`a is a not prime number`);
		}
	}
	else {
		console.log("The number is not a prime number.");
	}
}

function primeNumber2(){
	inputValue();
	let isPrime = true;
	if (b === 1) {
    console.log("1 is neither prime nor composite number.");
	}
	else if (b > 1) {
		for (let i = 2; i < b; i++) {
			if (b % i == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			console.log(`b is a prime number`);
		} else {
			console.log(`b is a not prime number`);
		}
	}
	else {
		console.log("The number is not a prime number.");
	}
}

function multiTable(){
	inputValue();
	for(i=1; i <= b; i++){
	document.getElementById("mul").innerHTML = txt +=
	("<br>"+a+" * "+i+" = "+(i * a));
	}
	inputResult();
	primeNumber1();
	primeNumber1();
}
