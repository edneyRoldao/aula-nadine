const prompt = require('prompt-sync')();
let num = parseInt(prompt("Digite um número inteiro: "));

let isPrimo = true;
let contadorDivisao = 0; 
let i = 2;

for(; i <= 9; i++) {
    if (num <= 1) {
        isPrimo = false;
        break;
    }
        
    if (num % i == 0) {
        contadorDivisao++
    }

    if (contadorDivisao > 1) {
        isPrimo = false;
        break;
    }
}

console.log('total vezes loop: ', i);

if (isPrimo) {
    console.log('é primo: ', num);
} else {
    console.log('não é primo: ', num);
}
