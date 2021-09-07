/* //Adding two arrays
var a = [1, 3, 5, 7, 9];
var b = [2, 4, 6, 8, 10];
var c = [];
function add(){
	for(var i=0; i<a.length; i++){
		c[i] = a[i]+b[i];
	}
	console.log(c);
}


//Largest and Smallest Number in array
var num = [3, 2, 5, 1, 7, 12, 24];
//var num = [1, 3, 6, 8, 11, 22, 55];
var len = num.length;

function larSma(){
	for(var i=0; i<len; i++){
		for(var j = i; j < len; j++){
			if(num[i] < num[j]) {
				var temp = num[i]; 
				num[i] = num[j]; 
				num[j] = temp;
			}	
		}
	}
	console.log(num);
	console.log("Largest Number : " + num[0]);
	console.log("Second Largest Number : " + num[1]);
	console.log("Smallest Number : " + num[i-1]);	
	console.log("Second Smallest Number : " + num[i-2]);	
}


//2D - Array
var a = [[1,2,3],
		[4,5,6],
		[7,8,9]];
var b = a.length;
var c = a[0].length;
var txt = " ";

function action(){
	for(var i=0; i<b; i++){
		for(var j=2; j<c; j++){
			txt += a[i];	
		}
		txt += '<br>';	
	}
	document.getElementById("demo").innerHTML = txt;
}
*/


//Remove Duplicate Numbers in array
var numb = [1, 2, 3, 3, 4, 6, 8, 8, 9, 11, 11];
console.log(numb);

function duplicate(){
	var input = [];
    var output = [];
    var len = numb.length;
    var j = 0;
	var count = 0;
    for(var i = 0; i < len; i++) {
        var item = numb[i];
        if(input[item] !== 1) {
            input[item] = 1;
            output[j++] = item;
			count++;
        }
    }
	var x = len - count;
    console.log(output);
	console.log("Repitition : " + x);
} 