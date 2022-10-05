import { onGetEstudiantes } from './firebase.js'

let tbody = document.querySelector('#est1')
let contador = 0


window.addEventListener('DOMContentLoaded', async() => {

    onGetEstudiantes((querySnapshot) => {
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
        </tr>
        `;
    });

    tbody.innerHTML = html;
    
    const btnsDelete = tbody.querySelectorAll('.btn-delete')
    
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', () =>{
            console.log('Eliminando');
        })
    })
});

});
