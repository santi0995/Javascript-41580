import { deleteEstudiante, onGetEstudiantes } from "./firebase.js";

let tbody = document.querySelector("#est1");

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
        <button class="btn-delete" data-id="${est.id}">Eliminar</button>    
        </td>
        </tr>
        `;
      });

    tbody.innerHTML = html;

    const btnsDelete = tbody.querySelectorAll(".btn-delete");

    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({target: {dataset}}) => {
        deleteEstudiante(dataset.id)
      });
    });
  });
});
