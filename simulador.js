//Este programa sirve para indicar cuantos caracteres tiene el nombre o palabra ingresada
//además de deletrear la misma palabra


//  const nombreOriginal = prompt("Ingresa una palabra");

//  let num_caracteres = 0;

//  num_caracteres = nombreOriginal.length;
 
//  deletrearPalabra();

//  console.log(`Tu palabra es ${nombreOriginal} y tiene ${num_caracteres} caracteres`)

//  function deletrearPalabra(){
//      for (let i = 0; i <= nombreOriginal.length; i++) {
//              console.log(nombreOriginal.charAt(i))
//          }
//      }



const nombre = prompt("Ingrese el nombre del estudiante")

function calcularNotaFinal(nombre){
    let notaFinal = 0;
    for (let i = 1; i <= 3; i++) {
        let notaParcial = parseFloat(prompt(`Ingresa la nota del entregable ${i}`))
        notaFinal+= notaParcial/3;
    }
    console.log(`La nota final del estudiante ${nombre} es ${notaFinal.toFixed(2)} `)
}

calcularNotaFinal(nombre);

