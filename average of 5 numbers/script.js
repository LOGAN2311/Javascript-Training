/*
var cars = ["Audi", "BMW", "Honda", "Suzuki"];
var Clen = cars.length;

function myFunction(){
	document.getElementById("result").innerHTML = cars;
}

function myFunctionA(){
	var resultA = "";
	
	for(var i=0; i<Clen; i++){
		resultA += cars[i] + "<br>";
	}
	document.getElementById("resultA").innerHTML = resultA;
}

function myFunctionB(){
	var resultB = "";
	var j = 3;
	
	for(var i=0; i<Clen; i++){
		resultB += cars[j-i] + "<br>";
		
	}
	document.getElementById("resultB").innerHTML = resultB;
}

function myFunctionC(){
	var number;
	
	number = document.getElementById("number").value;
	
	for(var i=0; i<=Clen; i++){
		
		if(cars[i] == number){
			document.getElementById("resultC").innerHTML = "Value is true and Position is "+ i;
				break;		
		}else{
			document.getElementById("resultC").innerHTML = "Value is false";
		}	
	}
}
*/

// Array Even Or Odd Method //	
var num=[1,2,3,4,7,8,11,13,15,36];
	
function myFunctionD(){
        var sum=0;
        for(var i=0;i<=num[i];i++){
            if(num[i]%2==0){
                sum+=num[i];
                console.log(num[i]);
            }
        }
        console.log("The sum of all even numbers is:"+ sum);
		
	}
	
function myFunctionE(){
        var sum=0;
        for(var i=0;i<=num[i];i++){
            if(num[i]%2===1){
                sum+=num[i];
                console.log(num[i])
            }
        }
        console.log("The sum of all odd numbers is:"+ sum);
		
	}
	
function myFunctionF(){
	myFunctionD();
	myFunctionE();
}