const prompt = require('prompt-sync')();

var num = parseFloat(prompt("Digite um número qualquer: "));

 if (num % 2 == 0) {
  console.log("O número " + num + " é par");
 }else{
    console.log("O número " + num + " é ímpar");
 }
