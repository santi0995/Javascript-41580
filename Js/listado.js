
const estudiante = localStorage.getItem("Estudiante")

console.log(estudiante);

let lista = document.querySelector("#lista")

lista.innerHTML = estudiante.slice(1,-1)