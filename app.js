// const username = 'Santi'
// const password = 'password'
// const NUMERO = 1234

// const usernameLogin = prompt("Ingrese el usuario")
// const passwordlLogin = prompt("Ingrese la contraseña")

// if(usernameLogin == username && passwordlLogin == password){
//     alert(usernameLogin +  NUMERO + password)
// } else{
//     alert("401 Unauthorized")
// }

const name = prompt("Nombre");
const documento = prompt("Número de documento de identificación");
const ingresos = parseInt(prompt("Ingresos totales mensuales"));
const gastos = parseInt(prompt("Suma de gastos mensuales"));
const tieneTarjeta = prompt("Tiene tarjeta?");
let cupo;
if(tieneTarjeta == "Si" ){
     cupo = parseInt(prompt("cupo"));
}
const tipoEmpleado= prompt("Tipo de empleado");
let actividad;
let tipoDeContrato = "contratista";
if(tipoEmpleado == "empleado"){
    tipoDeContrato  == prompt("Tipo de contrato");
} else if(tipoEmpleado == "independiente"){
    actividad  = parseInt(prompt("Tipo de actividad"));
} 




if(tieneTarjeta == "Si" && cupo >= ingresos*2.5){
    console.log("Su tarjeta ha sido rechazada");
} 
if(ingresos - gastos < ingresos/2){
    console.log("Su tarjeta ha sido rechazada");
}
if(tipoEmpleado == "independiente" && actividad <= 3 && ingresos < 1000){
    console.log("Su tarjeta ha sido rechazada");
}
if(tipoEmpleado == "empleado" && tipoDeContrato == "contratista" &&  ingresos < 500){
    alert("Su tarjeta ha sido rechazada");
}
if(documento % 2 != 0){
    console.log("Su tarjeta ha sido rechazada");
}