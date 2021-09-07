/*
//Array in image
var images = ['Splash_image1.jpg','Splash_image2.jpg','Splash_image3.jpg','Splash_image4.jpg','Splash_image5.jpg','Splash_image6.jpg'];
var imgcnt = 1;
var len = images.length;

function image() {
    if(imgcnt<len){      
	document.getElementById("pic").src=images[imgcnt++];
    }	
}
document.getElementById("pic").src=images[0];
*/

//Array image accessing
var num = [0,1,2,1,2,2,0,1];

function display(){
	let dis = document.createElement("div");
	let disp = document.createElement("div");
	disp.style.width = "width", "150";
	disp.style.height = "150";
	disp.style.margin = "20px 50px";
    for(var i = 0; i < num.length; i++){
        if(num[i] == 0) {
			var x = document.createElement("img");
			x.setAttribute("src", "seat_avail.png");
			x.setAttribute("alt", "Seat Available");
			x.document.createElementById
			document.body.appendChild(x);
			}else if(num[i] == 1){
				var y = document.createElement("img");
				y.setAttribute("src", "seat_select.png");
				y.setAttribute("alt", "Select Seat");
				document.body.appendChild(y);
            }else if(num[i] != 1){
				var z = document.createElement("img");
				z.setAttribute("src", "seat_unavail.png");
				z.setAttribute("alt", "Seat Unavailable");
				document.body.appendChild(z);
            }
    }
}	

