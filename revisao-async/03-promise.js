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

const totalDespesasPromise = getTotalDespesas();

totalDespesasPromise.then((result) => {
    console.log('entrou no then');
    console.log(result);
})
.catch((error) => {
    console.log('entrou no error');
    console.log(error);
});
