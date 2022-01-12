const despesas = require('../base/lista-despesas')();

function sumarizarDespesas() {
    let valor = 0.00;

    despesas.forEach((desp) => {
        valor += desp.valor;
    })

    console.log(valor);
}

function sumarizarDespesasV2() {
    const total = despesas.reduce((valorAnterior, despesaAtual) => {
        return valorAnterior + despesaAtual.valor;
    }, 0);

    console.log(total);
}

sumarizarDespesas();
sumarizarDespesasV2();
