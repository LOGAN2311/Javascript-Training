/*
var animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey"];
var len = animals.length;

var txt = "<ul>";
for(var i=0; i<len; i++){
	document.getElementById("display").innerHTML = txt +=   "<li>" + animals[i] +"</li>";
}
txt += "</ul>";

var txt1 = "<ul>";
var j = 4;
for(var i=0; i<len; i++){
	document.getElementById("display").innerHTML = txt +=   "<li>" + animals[j-i] +"</li>";
}
txt1 += "</ul>";
*/

var numberArray = [1, 2, 3, 4, 5, 6];
var leng = numberArray.length;

function search(){	
	var number = Number(document.getElementById("number").value);
	//console.log(number);	
	for(var i=0; i < leng; i++){
		if(numberArray[i] == number){
		document.getElementById("display2").innerHTML = "The number is present and its position is " + i; 
		break;
		}else{
		document.getElementById("display2").innerHTML = "The number is not present...";
		}
	}
}

