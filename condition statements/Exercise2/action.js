var a, b, c, d, count, image;
	image = document.getElementById("image");
	
function randomGeneration(){
	a = Math.floor(Math.random()*11)+1;
	console.log("random "+a);
}
randomGeneration();

var count = 1;
function buttonClick(){
	b = document.getElementById("btn-res").value = count++;
	if(count == 12){	
		document.getElementById("btndis").disabled = true;
		document.getElementById("fin-res").innerHTML = "The game is over";
	}else{
		document.getElementById("btndis").disabled = false;
	}
}
buttonClick();

function btnValue(){
	d = document.getElementById("output1").innerHTML = 	(10-b);
}
btnValue();

function init(){
	var a, b, c, d, count = "";
}


function multi(){
	c = Number(document.getElementById("ran3").value);
	//console.log("input"+b);
	
	if(a == c){
		document.getElementById("result1").innerHTML = "Your guess is correct at " + (b) + " attempt"; 
		image.src="correct.jpg";
		//console.log("Answer correct");
	}
	else{
		document.getElementById("result1").innerHTML = "Your guess is wrong and the remaining guess is " + (d);
		image.src="incorrect.jpg";
		//console.log("Answer incorrect");
	}
	buttonClick();
	btnValue();
	document.getElementById("ran3").value = "";
	init();
}
