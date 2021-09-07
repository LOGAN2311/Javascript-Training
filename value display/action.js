//Display 1
function displayOne(){
	var a, i, j;
	var result1 = "";
	a = Number(document.getElementById("value1").value);
	
    for(i=1; i < a; i++) {
    result1 +="<br/>";   
		for(j=1; j<=i; j++) {
		result1 +="1";
		}    
    }
	document.getElementById("result1").innerHTML = result1;
}

//Display 2
function displayTwo(){
	var b, k, l;
	var result2 = "";
	b=Number(document.getElementById("value2").value);
	
    for(k=1; k < b; k++) {
	document.getElementById('result2').innerHTML += "<br/>";
        for(l=1; l<=k; l++) {
        document.getElementById('result2').innerHTML += "2";
        }
    }
}

//Display * - 1 
function displayThree(){
	var c, m, n;
	c=Number(document.getElementById("value3").value);
    
	for(m=1; m < c; m++) {
	document.getElementById('result3').innerHTML += "<br/>";
        for(n=1; n<=m; n++) {
        document.getElementById('result3').innerHTML += "*";
		}
	}
}

//Display * - 2
function displayFour(){
	var d, o, p;
	d=Number(document.getElementById("value4").value);
	
	for(o=1; o <= d; o++) {
	document.getElementById('result4').innerHTML += "<br/>";			
		for(p=1; p<=d-o; p++) {
		document.getElementById('result4').innerHTML += "*";
		}
	}
}

//Display * - 3
function displayFive(){
	var e, r, s;
	e=Number(document.getElementById("value5").value);
	
	for(r=1; r <= e; r++) {
	document.getElementById('result5').innerHTML +="<br/>";
		for(s=1; s<=e-r; s++) {
		document.getElementById('result5').innerHTML +="&nbsp&nbsp";
		}
		for(s=1; s<=r; s++){
		document.getElementById('result5').innerHTML +="*";
		}
	}
}	

//Display * - 4
function displaySix(){
	var f, u, v;
	f=Number(document.getElementById("value6").value);
	for(u=1; u <= f; u++) {
	document.getElementById('result6').innerHTML +="<br/>";	
		for(v=1; v<=u; v++){
		document.getElementById('result6').innerHTML +="&nbsp&nbsp";
		}	
		for(v=1; v<=f-u; v++) {
		document.getElementById('result6').innerHTML +="*";
		}	  
	}
}

//Display * - 5
function displaySeven(){
	var g, w, x, z;
	g=Number(document.getElementById("value7").value);
	for(w=0; w < g; w++) {
	document.getElementById('result7').innerHTML += "<br/>";
        for(x=0; x<=w; x++) {
        document.getElementById('result7').innerHTML += "*";
		}
		for(x=1; x<=g-w; x++) {
		document.getElementById('result7').innerHTML +="&nbsp&nbsp&nbsp&nbsp";
		}
		for(z=0; z<=w; z++){
		document.getElementById('result7').innerHTML +="*";
		}
	}	
}

//Display * - 6
function displayEight(){
	var h, ea, eb, ec;
	h=Number(document.getElementById("value8").value);
	for(ea=1; ea < h; ea++) {
	document.getElementById('result8').innerHTML += "<br/>";
        for(eb=1; eb<=h-ea; eb++) {
        document.getElementById('result8').innerHTML += "*";
		}
		for(eb=1; eb<=ea; eb++) {
		document.getElementById('result8').innerHTML +="&nbsp&nbsp&nbsp&nbsp";
		}
		for(ec=1; ec<=h-ea; ec++){
		document.getElementById('result8').innerHTML +="*";
		}
	}	
}

//Display * - 7
function displayNine(){
	var ni, ed, ee, ef, eg;
	ni=Number(document.getElementById("value9").value);
	for(ed=1; ed < ni; ed++) {
	document.getElementById('result9').innerHTML += "<br/>";
        for(ee=1; ee<=ed; ee++) {
        document.getElementById('result9').innerHTML += "*";
		}
	}
	for(ef=1; ef <= ni; ef++) {
	document.getElementById('result9').innerHTML += "<br/>";			
		for(eg=1; eg<=ni-ef; eg++) {
		document.getElementById('result9').innerHTML += "*";
		}
	}
}

//Display * - 8
function displayTen(){
	var te, eh, ei, ej, ek;
	te=Number(document.getElementById("value10").value);
	for(eh=1; eh <= te; eh++) {
	document.getElementById('result10').innerHTML +="<br/>";
		for(ei=1; ei<=te-eh; ei++) {
		document.getElementById('result10').innerHTML +="&nbsp&nbsp";
		}
		for(ei=1; ei<=eh; ei++){
		document.getElementById('result10').innerHTML +="*";
		}
	}
	for(ej=1; ej <= te; ej++) {
	document.getElementById('result10').innerHTML +="<br/>";	
		for(ek=1; ek<=ej; ek++){
		document.getElementById('result10').innerHTML +="&nbsp&nbsp";
		}	
		for(ek=1; ek<=te-ej; ek++) {
		document.getElementById('result10').innerHTML +="*";
		}	  
	}
}
	
