const prompt = require('prompt-sync')();

var num1 = parseFloat(prompt("Digite um número qualquer"));
var num2 = parseFloat(prompt("Digite um número qualquer"));
var num3 = parseFloat(prompt("Digite um número qualquer"));
var num4 = parseFloat(prompt("Digite um número qualquer"));
var num5 = parseFloat(prompt("Digite um número qualquer"));
var aux = 0;

if(num1 > 10){
 aux++;
}if(num2 > 10){
 aux++;
}if(num3 > 10){
 aux++;
}if(num4 > 10){
 aux++;
}if(num5 > 10){
 aux++;
}

console.log(aux + " números são maiores que 10");
