// Simple Night Mode
let btnNocturno = document.getElementById("boton-nocturno");

btnNocturno.onclick = function() {
	document.querySelector("body").classList.toggle("apagado");
}