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

function inputValue(){
	var input = Number(document.getElementById("input").value);
	console.log(input);
}

function search(){
	inputValue();	
		
}