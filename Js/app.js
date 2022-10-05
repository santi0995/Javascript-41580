import {saveEstudiante} from './firebase.js'

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let blockName = document.getElementById("blockButton");
let blockName1 = document.getElementById("blockButton1");
let formulario = document.querySelector('#form1')
let materia = document.querySelector('#materias')
let valores = document.getElementById('formMateria')
let promedio = document.getElementById('spanPromedio');
let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let contador = 0; 



nombre.addEventListener('change', blockInputName);
apellido.addEventListener('change', blockInputLast);


function blockInputName() {
    nombre.disabled = true; 
    nombre.className = "inputFocus";
}

function blockInputLast() {
    apellido.disabled = true;
    apellido.className = "inputFocus";
}

blockName.onclick = unblockInput;


function unblockInput(){
    nombre.disabled = false;
    nombre.className = "";
}

blockName1.onclick = unblockInput1;

function unblockInput1(){
    apellido.disabled = false;
    apellido.className = "";
}




class Estudiante{
    constructor(nombre, apellido, notaFinal, materia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaFinal = notaFinal;
        this.materia= materia;
    }
}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()  
    generarEstudiante()
})


function generarEstudiante(){

    let primer = parseInt(nota1.value);
    let segundo = parseInt(nota2.value);
    let tercer = parseInt(nota3.value);
    contador = (primer + segundo + tercer)/3;
    
    const objetoEstudiante = new Estudiante(
        formulario.usuario.value, 
        formulario.apellido.value,
        contador.toFixed(2),
        materia.value,
        ); 
        if(formulario.usuario.value && formulario.apellido.value && contador.toFixed(2) && materia.value){ 
        saveEstudiante(objetoEstudiante.nombre, objetoEstudiante.apellido, objetoEstudiante.notaFinal, objetoEstudiante.materia);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estudiante guardado con exito',
        showConfirmButton: false,
        timer: 1500
    })

}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes rellenar todos los campos'
      })
} 

formulario.reset();
valores.reset();
valores.className = "";
materia.value = "0"
nombre.className = "";
apellido.className = "";
promedio.innerText = "";
unblockInput();
unblockInput1();
};
