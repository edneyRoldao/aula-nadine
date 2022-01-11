const despesas = require('./base/lista-despesas')();
const parcelas = require('./base/lista-parcelas')();

//  fazendo um for com forEach
despesas.forEach((item) => {
    console.log(item);
});

// filtrando uma lista com filter
const sublist = despesas.filter((despesa) => {
    return despesa.descricao.toLocaleLowerCase().includes('conta');    
});
console.log(sublist);


const isPago = parcelas.every((parcela) => parcela.pago);
console.log('is divida paga: ', isPago);

const temParcelaAberta = parcelas.some((parcela) => !parcela.pago);
console.log('is parcela aberta: ', temParcelaAberta);
