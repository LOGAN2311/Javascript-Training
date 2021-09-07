var a, b, c;
var d = 6;

//Method - 1
function displayNumber1(){
	input1 = Number(document.getElementById("input1").value);
}
function triangle1(){
	displayNumber1();
	for(a=1; a <= input1; a++) {
	document.getElementById('result1').innerHTML += "<br/>";			
		for(b=1; b<=a; b++) {
		document.getElementById('result1').innerHTML += b;
		}
	}
}

//Method - 2
function displayNumber2(){
	input2 = Number(document.getElementById("input2").value);
}
function triangle2(){
	displayNumber2();
	for(a=1; a <= input2; a++) {
	document.getElementById('result2').innerHTML += "<br/>";			
		for(b=0; b<d-a; b++) {
		document.getElementById('result2').innerHTML += d-a;
		}
	}
}

//Method - 3
function displayNumber3(){
	input3 = Number(document.getElementById("input3").value);
}
function triangle3(){
	displayNumber3();
	for(a=1; a <= input3; a++) {
	document.getElementById('result3').innerHTML += "<br/>";			
		for(b=0; b<d-a; b++) {
		document.getElementById('result3').innerHTML += a;
		}
	}
}

//Method - 4
function displayNumber4(){
	input4 = Number(document.getElementById("input4").value);
}
function triangle4(){
	displayNumber4();
	for(a=1; a <= input4; a++) {
	document.getElementById('result4').innerHTML += "<br/>";			
		for(b=1; b<=a; b++) {
		document.getElementById('result4').innerHTML += d-a;
		}
	}
}

//Method - 5
function displayNumber5(){
	input5 = Number(document.getElementById("input5").value);
}
function triangle5(){
	displayNumber5();
	for(a=0; a <= input5; a++) {
	document.getElementById('result5').innerHTML += "<br/>";			
		for(b=1; b<d-a; b++) {
		document.getElementById('result5').innerHTML += b;
		}
	}
}

//Method - 6
function displayNumber6(){
	input6 = Number(document.getElementById("input6").value);
}
function triangle6(){
	displayNumber6();
	for(a=0; a <= input6; a++) {
	document.getElementById('result6').innerHTML += "<br/>";			
		for(b=1; b<d-a; b++) {
		document.getElementById('result6').innerHTML += (d-a)-b;
		}
	}
}


