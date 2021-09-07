var a, b, temp;

function inputValue(){
	a = Number(document.getElementById("value1").value);
	console.log("input: " + a);
	b = Number(document.getElementById("value2").value);
	console.log("input: " + b);
	temp = a;
	a = b;
	b = temp;
	console.log(a);
	console.log(b);
}


/*
function fizzbuzz(){
	inputValue();
	for (var i=1; i <= a; i++){
    if (i % 3 == 0 && i% 5 == 0){
        document.write("<br>" + "Multiple of 3 and 5");
    }else if (i % 3 == 0){
        document.write("<br>" + "Multiple of 3");
    }else if (i % 5 == 0){
        document.write("<br>" + "Multiple of 5");
    }else
        document.write("<br>" + i);
	}
}
*/


function swap(){
	inputValue();	
} 