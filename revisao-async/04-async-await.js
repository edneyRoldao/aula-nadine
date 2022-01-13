const despesas = require('./base/lista-despesas')();

function getTotalDespesas() {
    return new Promise(function(resolve, reject) {
        let valor = 0.00;

        setTimeout(() => {
            despesas.forEach((desp) => {
                valor += desp.valor;
            })

            if (valor > 4000) {
                reject(new Error('valor muito alto'))
            }
            resolve(valor);

        }, 1000);    
    });
}

async function calcularJurosAtraso() {
    const totalDespesas = await getTotalDespesas();
    const juros = totalDespesas * 0.10;
    console.log('Total a pagar com juros: ', totalDespesas + juros);
}

calcularJurosAtraso();
