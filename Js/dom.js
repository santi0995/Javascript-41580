let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let arrowb = document.getElementById("arrowButton");
let arrowb1 = document.getElementById("arrowButton1");

nombre.addEventListener('change', blockInputName);
apellido.addEventListener('change', blockInputLast);


function blockInputName() {
nombre.disabled = true; nombre.className = "inputFocus";
}

function blockInputLast() {
apellido.disabled = true; apellido.className = "inputFocus";
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

seleccionarMateria = () => valores.className = "notas1"

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

calcularPromedio = () => {
    nota1.value && nota2.value && nota3.value ? promedio.innerText = `El promedio es: ${contador.toFixed(2)}` 
    : 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar todas las notas'
      })
}

isNumberKey = (evt) => {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57)){
        return false;
        }else{
        }
        return true;
}



let materia = document.querySelector('#materias')
let formulario = document.querySelector('#form1')


class Estudiante{
    constructor(nombre, apellido, notaFinal, materia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.notaFinal = notaFinal;
        this.materia= materia;
    }
}

let list = [];

generarEstudiante = () => {
    const objetoEstudiante = new Estudiante(
        formulario.usuario.value, 
        formulario.apellido.value,
        contador.toFixed(2),
        materia.value,
    );  
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estudiante guardado con exito',
        showConfirmButton: false,
        timer: 1500
      })
    const token = generateTokenEstudiante(objetoEstudiante.nombre, objetoEstudiante.apellido, objetoEstudiante.notaFinal, objetoEstudiante.materia)
    localStorage.setItem("Estudiante", token)
    list.push(objetoEstudiante)
    // imprimirLista();
    console.log(list);
    //agregar validacion para guardar que necesite campos
};


function generateTokenEstudiante(Nombre, Apellido, Nota_Final, Materia ) {
    const user = {
        Nombre,
        Apellido,
        Nota_Final,
        Materia    
    };
    return JSON.stringify(user);
};


// imprimirLista = () => {
//     list.forEach((est)=> {
//         let listHTML = document.createElement("div");
//         listHTML.innerHTML = `<h2>${est.nombre}</h2>
//          <h2>${est.apellido}</h2>
//          <h2>${est.notaFinal.toFixed(2)}</h2>
//          <h2>${est.materia}</h2>`
//         promedio.appendChild(listHTML)
//     })
// }





