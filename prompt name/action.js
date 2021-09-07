alert("Welcome");

var name, image;
image = document.getElementById("image");

setTimeout(function(){
    name = prompt("What is your name?", "Type your full name here");
    //document.write("Document Written By: " + name + " (" + day + "/" + month + "/" + year + ") ");
	fullname = document.getElementById("display").innerHTML= "Welcome " + name + ". Have a nice day!!!";
	if(name != null){
	fullname;
	image.src="Happy-emoji.jpg";
	}else{
		document.getElementById("display").innerHTML= "Enter a valid name..."
		image.src="Sad-emoji.jpg";
	}
},750);

