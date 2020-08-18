console.log("Arquivo javascript1");

var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

console.log(document.querySelector("h2"));

var subtitulo = document.querySelector(".subtitulo");
console.log(subtitulo.textContent);


var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector('.info-peso');
var tdAltura = document.querySelector('.info-altura');

peso = tdPeso.textContent;
altura = tdAltura.textContent;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(tdAltura);
console.log(altura);

