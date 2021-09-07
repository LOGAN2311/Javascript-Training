var a, b;
var txt = "";

//Factorial Number
function inputValue(){
	a = Number(document.getElementById("enter").value);
}

function factorialize() {
	inputValue();
	if (a 
	
	< 0) {
    document.getElementById("result").innerHTML = 
	('Factorial for negative number does not exist.');
	}
	else if (a === 0) {
    document.getElementById("result").innerHTML = 
	("The factorial value is " + a);
	}
	else {
    let fact = 1;
    for (i = 1; i <= a; i++) {
        fact *= i;
    }
    document.getElementById("result").innerHTML = 
	("The factorial value is " + fact);
	}
}

//Fibonacci Series
function inputValue1(){
	b = Number(document.getElementById("enter1").value);
}

function fibonacci(){
	inputValue1();
	let n1 = 0, n2 = 1, nextTerm;

	for (let i = 1; i <= b; i++) {
		document.getElementById("result1").innerHTML = txt += "<br>" + n1;
		//console.log(n1);
		nextTerm = n1 + n2;
		n1 = n2;
		n2 = nextTerm;
	}
}


//Palindrome Number
function inputValue2(){
	c = Number(document.getElementById("enter2").value);
}

function palindrome(){
		inputValue2();
		var rem, temp, final = 0;

		temp = c;
		while(c>0)
		{
			rem = c%10;
			c = parseInt(c/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			document.getElementById("result2").innerHTML = 
			("The entered number is Palindrome");
		}
		else
		{
			document.getElementById("result2").innerHTML = 
			("The entered number is not palindrome");
		}
	}
	
//Reverse Number
function inputValue3(){
	d = Number(document.getElementById("enter3").value);
}	
	
function reverse(){
	inputValue3();
	var n = d;
	var rev = 0, rem;
	while (n>0){
		rem = n % 10;
		rev = rev * 10 + rem ;
		n = Math.floor(n/10);
	}
	document.getElementById("result3").innerHTML = ("The given number is : " +d+ " <br/> The reversed number is : " +rev+ "\n");
}	


//Add Given Number
function inputValue4(){
	e = Number(document.getElementById("enter4").value);
}

function add(){
	inputValue4();
	sum = 0;

	while (e) {
      sum += e % 10;
      e = Math.floor(e / 10);
	}
  
	var result = document.getElementById("result4").innerHTML = sum;
}