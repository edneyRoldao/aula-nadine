const despesas = require('./base/lista-despesas')();

function getTotalDespesas() {
    let valor = 0.00;

    setTimeout(() => {
        despesas.forEach((desp) => {
            valor += desp.valor;
        })   
    }, 1000);

    return valor;
}

let multaAtraso = 20.0;
let total = getTotalDespesas();

console.log('valor a pagar: ', multaAtraso + total);
