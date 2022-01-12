let despesas = require('../base/lista-despesas')();

function removerDespesaPorId(id) {
    const listaFiltrada = despesas.filter((element) => {
        return element.id != id;
    });

    despesas = listaFiltrada;
}

function removerDespesaPorIdV2(id) {
    let i = 0;
    
    for (; i < despesas.length; i++) {
        if (despesas[i].id == id) {
            break;
        }
    }

    despesas.splice(i, 1);
}

removerDespesaPorId(2);
// removerDespesaPorIdV2(2);
console.log(despesas);
