let nombre = prompt("Ingrese el nombre del estudiante")
let apellido = prompt("Ingrese el apellido del estudiante")
let materia = prompt("Ingrese la materia")

let name = document.getElementsByClassName('name');
name[0].innerHTML = `Nombre: ${nombre}`;

let last = document.getElementsByClassName("lastName");
last[0].innerHTML = `Apellido: ${apellido}`;

let note = document.getElementsByClassName("materia");
note[0].innerHTML = `Materia: ${materia}`;

let list = document.querySelector("#first");
list.innerHTML = `<input 
class="corte1"
type="text"
placeholder="Nota de primera entrega"
/>`;

let list2 = document.querySelector("#second");
list2.innerHTML = `<input 
class="corte2"
type="text"
placeholder="Nota de segunda entrega"
/>`;

let list3 = document.querySelector("#third");
list3.innerHTML = `<input 
class="corte3"
type="text"
placeholder="Nota de tercera entrega"
/>`;
