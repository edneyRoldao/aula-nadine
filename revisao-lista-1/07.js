const prompt = require('prompt-sync')();

const valorVendas = parseFloat(prompt("Informe o total de vendas: "));
const valorSalario = parseFloat(prompt("Informe o salario: "));

let vComissao1 = valorVendas * 0.03;
let vComissao2 = 0.00;

if (valorVendas > 1500) {
    vComissao1 = 1500 * 0.03;
    let diferenca = valorVendas - 1500;
    vComissao2 = diferenca * 0.05;
}

const totalReceber = valorSalario + vComissao1 + vComissao2;

console.log('v comissao 1: ', vComissao1);
console.log('v comissao 2: ', vComissao2);
console.log('Total a receber: ', totalReceber);
