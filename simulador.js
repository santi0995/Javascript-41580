//Este programa sirve para indicar cuantos caracteres tiene el nombre o palabra ingresada
//además de deletrear la misma palabra


 const nombreOriginal = prompt("Ingresa una palabra");

 let num_caracteres = 0;

 num_caracteres = nombreOriginal.length;
 
 deletrearPalabra();

 console.log(`Tu palabra es ${nombreOriginal} y tiene ${num_caracteres} caracteres`)

 function deletrearPalabra(){
     for (let i = 0; i <= nombreOriginal.length; i++) {
             console.log(nombreOriginal.charAt(i))
         }
     }



