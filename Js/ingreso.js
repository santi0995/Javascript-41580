let valores = document.getElementById('formMateria')
let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let promedio = document.getElementById('spanPromedio');
let contador = 0;


nota1.addEventListener("input", mostrarPromedio)
nota2.addEventListener("input", mostrarPromedio)
nota3.addEventListener("input", mostrarPromedio)

function seleccionarMateria() {
    valores.className = "notas1"
}

function mostrarPromedio(){

        let primer = parseInt(nota1.value);
        let segundo = parseInt(nota2.value);
        let tercer = parseInt(nota3.value);
        contador = (primer + segundo + tercer)/3;
    
}

function calcularPromedio(){
    nombre.value && apellido.value && nota1.value && nota2.value && nota3.value ? promedio.innerText = `El promedio es: ${contador.toFixed(2)}` 
    : 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes rellenar todos los campos'
      })
}

function soloNumeros(evt){
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57)){
        return false;
        }else{
        }
        return true;
}