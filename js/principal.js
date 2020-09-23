var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');
var tdImc = paciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;


var alturaValida = true;
var pesoValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido');
    tdPeso.textContent = 'Peso inválido';
    pesoValido = false;
};

if (altura <= 0 || altura >= 3.00) {
    console.log('Altura inválida');
    tdAltura.textContent = 'Altura inválida';
    alturaValida = false;
};

if (pesoValido && alturaValida) {

    var imc = peso / Math.pow(altura, 2);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
};
