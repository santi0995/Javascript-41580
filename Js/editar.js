import { getEst, onGetEstudiantes, updateEstudiante } from "./firebase.js";

let tbody = document.querySelector("#est1");
let editForm = document.querySelector('#editForm')
let formSubmit = document.querySelector('#formSubmit')
let id = "";

window.addEventListener("DOMContentLoaded", async () => {
  onGetEstudiantes((querySnapshot) => {
    let html = "";

    querySnapshot.forEach((est) => {
      const estud = est.data();

      html += `
      <tr class="list">
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
              editForm["nameInput"].value = est.Nombre;
              editForm["lastNameInput"].value = est.Apellido;
              editForm["materiaInput"].value = est.Materia;
              editForm["notaInput"].value = est.NotaFinal;
    
              id = doc.id;
              formSubmit["btn-edit-form"].className = "active";
            } catch (error) {
              console.log(error);
            }
        });
    })
});
})

formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = editForm["nameInput"];
    const lastName = editForm["lastNameInput"];
    const materia = editForm["materiaInput"];
    const notaFinal = editForm["notaInput"];

    try {
          updateEstudiante(id, {
              Nombre: name.value, 
              Apellido: lastName.value, 
              NotaFinal: notaFinal.value,
              Materia: materia.value,
          }) 
      editForm.reset();
      formSubmit["btn-edit-form"].className = "nonActive";

    } catch (error) {
        console.log(error);
      }
  });





