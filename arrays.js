function ingresarEstudiantes(){



const seleccion = parseInt(prompt(
`Selecciona una opción: 

    1. Ingresar estudiante y su información.
    2. Revisar listado de estudiantes ingresados.
    3. Eliminar estudiante e información.
    4. Salir.`));




switch(seleccion){
    case 1:
        const nombre = prompt("Ingrese el nombre del estudiante")

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


let infoEstudiantes = [];

function calcularNotaFinal(nombre, materia){
    let arreglo = [];
    let notaFinal = 0;
        for (let i = 1; i <= 3; i++) {
        let notaParcial = parseFloat(prompt(`Ingresa la nota del entregable ${i}`))
        if (notaParcial > 0) {
            notaFinal += notaParcial/3;
        } else {
            notaParcial = 0;
        }
        }
    notaFinal = notaFinal.toFixed(2);
    infoEstudiantes.push({nombre, materia, notaFinal});
    arreglo = infoEstudiantes;


    console.log(arreglo);
}


let materia = "";

        switch (seleccionMateria) {
            case 1:
                materia = "Matematicas"
                calcularNotaFinal(nombre, materia);
                menuMateria();
                break;
        
            case 2:
                materia = "Fisica"
                calcularNotaFinal(nombre, materia);
                menuMateria();
                break;
        
            case 3:
                
                break;
        
            case 4:
                
                break;
        
            case 5:
                
                break;
        
            default:
                alert("Opcion no valida, Selecciona otra opción");
                definirMateria();        
                break;
            }
        }

        break;
        
    case 2:
        console.log("Gracias por usar la plataforma.");
        break;
        
    case 3:
        console.log("Gracias por usar la plataforma.");
        break;
        
    case 4:
        console.log("Gracias por usar la plataforma.");
        break;
        
    default:
        alert("Opcion no valida, Selecciona otra opción");
        ingresarEstudiantes();
            break;
        };
    }

ingresarEstudiantes();



