// for (let index = 11; index <= 51 ; index+=10) {
//     if(index == 51){
//         console.log(index - 1)
//         continue;
//     }
//     console.log(index)
// }



// let numeroIngresado = parseInt(prompt("Ingresa un número"));

// for (let i = 0; i <= numeroIngresado; i++) {
//     if(i % 2 == 0)
//     console.log(i)
// }



// for (let i = 50; i >= 0; i--) {
//     console.log(i)
// }



// let numeroIngresado = parseInt(prompt("Ingresar un número"))

// if (numeroIngresado % 10 == 0){
//     console.log("Tu número es divisible entre 10")
// } else {
//     console.log("Tu número no es divisible entre 10")
// }


// let numero = parseInt(prompt("Ingresa el numero"))
// let suma = 0;
 
// for (let i = 10; i < numero * 10; i *= 10) {
//     let digito = numero % i;
//     let resultado = parseInt(digito / (i / 10));
//     suma = suma + resultado;
// }
// console.log(suma);

// let today = new Date(); //entrega la fecha de hoy
// let day = today.getDay(); // entrega un numero equivalente al dia 
// switch (day) {
//     case 1:
//         console.log("Es lunes");
//         break;
//     case 2:
//         console.log("Es Martes");
//         break;
//     case 3:
//         console.log("Es miercoles");
//         break;
//     case 4:
//         console.log("Es jueves");
//         break;
//     case 5:
//         console.log("Es viernes");
//         break;
//     case 6:
//         console.log("Es sabado");
//         break;
//     case 7:
//         console.log("Es domingo");
//         break;
//         default:
//             break;
// }


// let numero = 15;
// for (let x = 0; x < numero; x++) {
//     let cadena = "";
//     for (let y = 0; y < numero; y++) {
//         if (y == x || x == numero - y -1) {
//             cadena += "*";
//         }else{
//             cadena += " ";
//         }
//     }
//     console.log(cadena);
// }

// function imprimirAlgo(mensaje){
//     console.log(mensaje)
// }

// let mensaje = "hola"
// imprimirAlgo(mensaje);



function getSum(numero){
    let suma = 0; 
    for (let i = 10; i <= numero * 10; i *= 10) {
      let digito = numero % i;
      let resultado = parseInt(digito / (i / 10));
      suma = suma + resultado;
    }
    return suma;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, "-->" ,getSum(i))    
}