const despesas = require('../base/lista-despesas')();

function filtrarDespesasPorNome(nome) {
    const listaFiltrada = [];

    for(i = 0; i < despesas.length; i++) {
        if(despesas[i].descricao.toLocaleLowerCase().includes(nome.toLocaleLowerCase())){
            listaFiltrada.push(despesas[i]);
        }
    }

    return listaFiltrada;
}

const despesasFiltro = filtrarDespesasPorNome("conta");
console.log(despesasFiltro);
