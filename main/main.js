'use strict';

let generate = document.querySelector('#generate');


// funcion para generar cada uno de los valores que componen el sistema hexadecimal
function valoresHexadecimal(){
	var valoresColor = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
  // generar valor random en 1 y 16 que son las posiciones de mi array
	var posicionArray = (Math.random()*15).toFixed(0);
	return valoresColor[posicionArray];
}

// funcion para ir acumulando cada uno de los valores hexadecimales
function colorHexadecimal(){
  // declaro mi varaible que va a acumular los valores de RED, GREEN y BLUE que componen el sistema Hexadecimal formada por 6 valores
	var color = "";
	for(var i=0;i<6;i++){
		color = color + valoresHexadecimal() ;
	}
	return "#" + color;
}

// funcion para agregar valores hexadecimal a los elementos HTML tanto texto como background
generate.addEventListener('click', function(){

	let hexadecimal = document.querySelector('#hexadecimal');
	let valorHTML = colorHexadecimal();
	hexadecimal.innerHTML = valorHTML;

	let container = document.querySelector('.container');
	container.style.background = valorHTML;

});










