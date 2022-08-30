const infoEstudiantes = [];

function ingresarEstudiantes(){


const listaUsuarios = (infoEstudiantes) => console.log(infoEstudiantes);


const verEstudiante = (infoEstudiantes) => {
    let texto = "";
    for (let i = 0; i < infoEstudiantes.length; i++) {
        texto = texto.concat(
            `Ingrese ${i + 1} para ver el estudiante ${infoEstudiantes[i].nombre} \n`
            );
    }
    const option = parseInt(prompt(texto));
    console.log(infoEstudiantes[option - 1]);
}

const eliminarEstudiante = (infoEstudiantes) => {
    let texto = "";
    for (let i = 0; i < infoEstudiantes.length; i++) {
        texto = texto.concat(
            `Ingrese ${i + 1} para eliminar al estudiante ${infoEstudiantes[i].nombre} \n`
            );
    }
    const option = parseInt(prompt(texto));
    infoEstudiantes.splice(option - 1, 1);
    console.log("Informacion actualizada");
    listaUsuarios(infoEstudiantes);
}

const seleccion = parseInt(prompt(
`Selecciona una opción: 

    1. Ingresar estudiante y su información.
    2. Revisar listado de estudiantes ingresados.
    3. Revisar información de un estudiante.
    4. Eliminar estudiante e información.
    5. Cerrar sesión.`));




switch(seleccion){
    case 1:
        const nombre = prompt("Ingrese el nombre del estudiante");
        const apellido = prompt("Ingrese el apellido del estudiante");

        definirMateria()

function definirMateria(){
        const seleccionMateria = parseInt(prompt(
            `Selecciona una materia:    

                1. Matematicas
                2. Fisica
                3. Lengua
                4. Inglés.
                5. Salir`));



function menuMateria(){
    const seleccion = parseInt(prompt(
        `Selecciona una opción: 
        
            1. Elegir otra materia
            2. Menu principal.
            3. Salir.`));

            switch (seleccion) {
                case 1:
                definirMateria();  
                    break;
            
                case 2:
                ingresarEstudiantes();
                    break;
            
                case 3:
                console.log("Gracias por usar la plataforma");
                    break;
            
                default:
                    alert("Opción no valida, seleccione otra opción")
                    menuMateria();
                    break;
            }
}

class Usuario {
    constructor(nombre, apellido, materia, notaFinal, id){
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.notaFinal = notaFinal;
    this.id = id;
}}



const calcularNotaFinal = (nombre, apellido, materia) => {
    let notaFinal = 0;
        for (let i = 1; i <= 3; i++) {
        let notaParcial = parseFloat(prompt(`Ingresa la nota del entregable ${i}`))
        if (notaParcial > 0 && notaParcial < 11) {
            notaFinal += notaParcial/3;
        } else if (notaParcial > 10) {
            alert("Valor incorrecto");
            notaParcial = parseFloat(prompt(`Ingresa la nota del entregable ${i}`))
            notaFinal += notaParcial/3;
        } else {
            notaParcial = 0;
        }
        }
    notaFinal = notaFinal.toFixed(2);
    let nuevoEstudiante = new Usuario(nombre, apellido, materia, notaFinal, infoEstudiantes.length + 1);
    infoEstudiantes.push(nuevoEstudiante); 

    console.log(infoEstudiantes);
}



let materia = "";

        switch (seleccionMateria) {
            case 1:
                materia = "Matematicas"
                calcularNotaFinal(nombre, apellido, materia,);
                menuMateria();
                break;
        
            case 2:
                materia = "Fisica"
                calcularNotaFinal(nombre, apellido, materia,);
                menuMateria();
                break;
        
            case 3:
                materia = "Lengua"
                calcularNotaFinal(nombre, apellido, materia,);
                menuMateria();
                break;
        
            case 4:
                materia = "Inglés"
                calcularNotaFinal(nombre, apellido, materia,);
                menuMateria();
                break;
        
            case 5:
                console.log("Gracias por usar la plataforma.");
                break;
        
            default:
                alert("Opcion no valida, Selecciona otra opción");
                definirMateria();        
                break;
            }
        }

        break;
        
    case 2:
        listaUsuarios(infoEstudiantes);
        ingresarEstudiantes();
        break;
        
    case 3:
        verEstudiante(infoEstudiantes);
        ingresarEstudiantes();
        break;
        
    case 4:
        eliminarEstudiante(infoEstudiantes);
        ingresarEstudiantes();
        break;
        
    case 5:
        console.log("Gracias por usar la plataforma.");
        break;
        
    default:
        alert("Opcion no valida, Selecciona otra opción");
        ingresarEstudiantes();
            break;
        };
    }
    
    //ingresarEstudiantes();



