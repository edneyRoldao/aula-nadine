const prompt = require('prompt-sync')();
const dataNascimento = prompt('Informe a data de nascimento (dd/mm/aaaa): ');

const dtNascimentoToken = dataNascimento.split('/');
const dataAtualToken = new Date().toLocaleDateString('pt-br').split('/');

const dia = parseInt(dtNascimentoToken[0]);
const mes = parseInt(dtNascimentoToken[1]);
const ano = parseInt(dtNascimentoToken[2]);
const diaHj = parseInt(dataAtualToken[0]);
const mesHj = parseInt(dataAtualToken[1]);
const anoHj = parseInt(dataAtualToken[2]);

let anos = anoHj - ano;

if (mes == mesHj && dia > diaHj) {
    anos--;
} else if (mesHj < mes) {
    anos--;
}

const totalDias = (anos * 365) + ((mesHj-1) * 30) + diaHj;

console.log('total dias vida: ', totalDias);
console.log('sua idade é: ', anos);
