const lista = document.querySelector('#listado')

fetch('../list.json')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((est) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4 class="nombre">Nombre: ${est.nombre}</h4>
                <p class="keys">Apellido: ${est.apellido}</p>
                <p class="keys">Nota final: ${est.nota_final}</p>
                <p class="keys">Materia: ${est.materia}</p>
            `
            lista.append(li)
        })
    })
