import { deleteTask, onGetTasks } from "./firebase.js";

let tbody = document.querySelector("#est1");
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
        <button class="btn-delete" data-id="${est.id}">Eliminar</button>    
        </td>
        </tr>
        `;
      });

    tbody.innerHTML = html;

    const btnsDelete = tbody.querySelectorAll(".btn-delete");

    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({target: {dataset}}) => {
        deleteTask(dataset.id)
      });
    });
  });
});
