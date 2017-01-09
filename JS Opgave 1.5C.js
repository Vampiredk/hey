 //Tegne app
 
var canvas;
var ctx;
var xgl;;
var ygl; 

function init(){												
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touch.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx = fillStyle="yellow";
	ctx = fillrect (0,0 mycanvas. width, mycanvas.height);
}

function end(e){
	e.preventDefault();	
	}