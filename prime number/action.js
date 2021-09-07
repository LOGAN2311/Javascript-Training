var a;
var txt = "";
var i = 1;

function inputValue(){
	a = Number(document.getElementById("value1").value);
}

function primeNumber(){
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
			document.getElementById("prime").innerHTML=('It is a prime number');
		} else {
			document.getElementById("prime").innerHTML=('It is a not prime number');
		}
	}
	else {
		console.log("The number is not a prime number.");
	}
}

function primeGenerate(){
	var b = 0;
	inputValue();
	for (var i = b; i <= a; i++) {
		var c = 0;
	
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            c = 1;
            break;
        }
    }
    if (i > 1 && c == 0) {
        document.getElementById("pri-res").innerHTML= txt += "<br>The Prime Nmbers is: " + i;
    }
	}
}

function multiTable(){
	inputValue();
	primeNumber();
	primeGenerate();
}
