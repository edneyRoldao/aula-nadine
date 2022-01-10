const prompt = require('prompt-sync')();

var num1 = parseInt(prompt("Digite um número inteiro"));
var num2 = parseInt(prompt("Digite um número inteiro"));
var num3 = parseInt(prompt("Digite um número inteiro"));
var num4 = parseInt(prompt("Digite um número inteiro"));
var num5 = parseInt(prompt("Digite um número inteiro"));

 var media = (num1 + num2 + num3 + num4 + num5) / 5;

 if(num1 > media){
  console.log(num1 + " é maior que a média");
  
 }if(num2 > media){
    console.log(num2 + " é maior que a média");
  
 }if(num3 > media){
    console.log(num3 + " é maior que a média");
  
 }if(num4 > media){
    console.log(num4 + " é maior que a média");
  
 }if(num5 > media){
    console.log(num5 + " é maior que a média");
 }
