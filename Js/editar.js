import { getEst, onGetTasks, updateEst } from "./firebase.js";

let tbody = document.querySelector("#est1");
let taskForm = document.querySelector('#taskForm')
let formSubmit = document.querySelector('#formSubmit')
let id = "";
let contador = 0

window.addEventListener("DOMContentLoaded", async () => {
  onGetTasks((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((est) => {
      const estud = est.data();

      html += `
      <tr class="list">
      <th class="id"scope="row">${contador+=1}</th>
      <td>${estud.Nombre}</>
      <td>${estud.Apellido}</>
      <td>${estud.Materia}</>
      <td>${estud.NotaFinal}</>
      <td>    
      <button class="btn-edit" data-id="${est.id}">Editar</button>    
      </td>
      </tr>
      `;
        
    });

    tbody.innerHTML = html;

    const btnsEdit = tbody.querySelectorAll(".btn-edit");
    
    btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
           
            try {
              const doc = await getEst(e.target.dataset.id);
              const est = doc.data();
              taskForm["nameInput"].value = est.Nombre;
              taskForm["lastNameInput"].value = est.Apellido;
              taskForm["materiaInput"].value = est.Materia;
              taskForm["notaInput"].value = est.NotaFinal;
    
              id = doc.id;
              formSubmit["btn-task-form"].className = "active";
            } catch (error) {
              console.log(error);
            }
        });
    })
});
})

formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = taskForm["nameInput"];
    const lastName = taskForm["lastNameInput"];
    const materia = taskForm["materiaInput"];
    const notaFinal = taskForm["notaInput"];

    try {
          updateEst(id, {
              Nombre: name.value, 
              Apellido: lastName.value, 
              NotaFinal: notaFinal.value,
              Materia: materia.value,
          }) 

      taskForm.reset();
    } catch (error) {
        console.log(error);
      }
    
  });





