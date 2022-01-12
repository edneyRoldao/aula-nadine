const despesas = require('./base/lista-despesas')();

function getTotalDespesas(callback) {
    let valor = 0.00;

    setTimeout(() => {
        despesas.forEach((desp) => {
            valor += desp.valor;
        })

        callback(valor);
        // return valor;
    }, 1000);
}

getTotalDespesas((result) => {
    const multaPorAtraso = 20.0;
    console.log('total a pagar: ', result + multaPorAtraso);
});
