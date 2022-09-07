let nombre = document.getElementById("nombre");
let arrowb = document.getElementById("arrowButton");
let arrowb1 = document.getElementById("arrowButton1");
let apellido = document.getElementById("apellido");

nombre.addEventListener('change', blockInputName);
apellido.addEventListener('change', blockInputLast);


function blockInputName (){
    nombre.disabled = true;
    nombre.className = "inputFocus";
}

function blockInputLast (){
    apellido.disabled = true;
    apellido.className = "inputFocus";
}

arrowb.onclick = arrowB;

function arrowB(){
    nombre.disabled = false;
}

arrowb1.onclick = arrowB1;

function arrowB1(){
    apellido.disabled = false;
}

let valores = document.getElementById('formMateria')

function seleccionarMateria(){
    valores.className = "notas1"
}


let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");


nota1.addEventListener("input", mostrarPromedio)
nota2.addEventListener("input", mostrarPromedio)
nota3.addEventListener("input", mostrarPromedio)

let promedio = document.getElementById('spanPromedio');
let contador = 0;

function mostrarPromedio(){
    let primer = parseInt(nota1.value);
    let segundo = parseInt(nota2.value);
    let tercer = parseInt(nota3.value);
    contador = (primer + segundo + tercer)/3;
}


function calcularPromedio(){
    promedio.innerText = `El promedio es: ${contador.toFixed(2)}`
}