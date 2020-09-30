var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido');
    tdPeso.textContent = 'Peso inválido';
    pesoValido = false;
    paciente.classList.add("paciente-invalido");
  };

  if (altura <= 0 || altura >= 3.00) {
    console.log('Altura inválida');
    tdAltura.textContent = 'Altura inválida';
    alturaValida = false;
    paciente.classList.add("paciente-invalido");
  };

  if (pesoValido && alturaValida) {

    var imc = peso / Math.pow(altura, 2);
    tdImc.textContent = imc.toFixed(2);
  } else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
  };

}

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function() {
  console.log('Oi! Cliquei no botão!');
});

// titulo.addEventListener('click', mostraMensagem);

// function mostraMensagem() {
//   alert('Olá! Eu fui clicado!');
// }

// titulo.addEventListener('click', function(){
//   alert('Olha só! Posso chamar uma função anonima!')
// });