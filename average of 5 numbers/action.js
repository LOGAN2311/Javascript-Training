var a = [11, 22, 33, 44, 55, 66, 77];
var len = a.length;
var sum = 0;
//console.log(len);

function average(){
	document.getElementById("output").innerHTML = "Input Numbers : " + a;
	for(i=0; i<len; i++){
	sum += a[i];	
	document.getElementById("output1").innerHTML = 
	sum/len;
	}
}
average();


//Sorting
var numbs = [1, 2, 3, 4, 5, 10, 9, 7, 8, 6, 11];
var num = numbs.length;

document.getElementById("input").innerHTML = "Input Numbers: " + numbs;

function sort(){
	var a, b, c, d;
	var odd = 0;
	var even = 0;
	var od = 1;
	var ev = 1;
	var count = 0;
	for(var i=0; i < numbs.length; i++) { 
		if(numbs[i] % 2 === 1) {			
		odd += numbs[i];
		console.log("Odd Number : " + numbs[i]);
		count++;
		}
		if(numbs[i] % 2 == 0) {
		even += numbs[i];
		console.log("Even Number : " + numbs[i]);
		}
	} 
	var x = num-count;
	a = document.getElementById("odd").innerHTML = "Number of Odd Numbers are : " + count;
	b = document.getElementById("odds").innerHTML = "Odd Numbers Total : " + odd;
	c = document.getElementById("evens").innerHTML = "Even Numbers Total : "  + even;
	d = document.getElementById("even").innerHTML = "Number of Even Numbers are : " + x;
}

