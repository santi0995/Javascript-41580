const numeros = [];

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
    };


// console.log(numeros);

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]; 
    suma += numero;
}

// console.log(suma);

// numeros.pop();

for (let i = 0; i < numeros.length; i++) {
    if (i % 2 == 0) {
        // console.log(i+1);
    }   
}
;

console.log(numeros.reverse());