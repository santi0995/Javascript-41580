let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let arrowb = document.getElementById("arrowButton");
let arrowb1 = document.getElementById("arrowButton1");



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
    if(nota1.value && nota2.value && nota3.value){
    promedio.innerText = `El promedio es: ${contador.toFixed(2)}`
    }else{
        alert("Debes rellenar todos los campos")
    }
}

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57)){
        return false;
        }else{
        }
        return true;
}



let formulario = document.querySelector('#form1')

function generarEstudiante(){

    let valueUser = formulario.usuario.value;
    let valueLastName = formulario.apellido.value; 
    let valueNota = contador

    const objetoEstudiante = {
        nombre: valueUser,
        apellido: valueLastName,
        notaFinal: valueNota,
    };

    const token = generateTokenEstudiante(objetoEstudiante.nombre, objetoEstudiante.apellido, objetoEstudiante.notaFinal)
    localStorage.setItem("Estudiante", token)
    promedio.innerText = `Estudiante guardado con exito`
}

function generateTokenEstudiante(nombre, apellido, notaFinal ) {
    const user = {
    nombre,
    apellido,
    notaFinal,    
    };
    return JSON.stringify(user);
};