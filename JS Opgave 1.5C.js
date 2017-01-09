 // Global værdier

var tal1;
var tal2;
var tal3;

function konventer(){
	tal1=parseFloat(document.test.tal_1.value);
	tal2=parseFloat(document.test.tal_2.value);
	tal3=parseFloat(document.test.tal_3.value);
}

function sum1(){
	konventer();
	var resultat =tal2 * tal3;
	document.test.kommentar1.value=resultat;
}

function sum2(){
	konventer();	
	var resultat =tal1 * tal2 * tal3;
	document.test.kommentar2.value=resultat;
}

function init(){												
	var touchzone = document.getElementById("touchzone");
	touchzone.addEventListener("touchstart", touchHandler, false);
}

function touchHandler(event){
	document.getElementById("koordinater").innerHTML = " x: " + event.touches[0].pageX + ", y: " + event.touches[0].pageY;
}