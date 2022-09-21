
const estudiante = localStorage.getItem("Estudiante")


let lista = document.querySelector("#lista")


console.log(estudiante);

lista.innerHTML = estudiante.slice(1,-1)