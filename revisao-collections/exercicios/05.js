const despesas = require('../base/lista-despesas')();

function getListaDespesasSimples() {
    const listaSimples = despesas.map((despesa) => {
        return {
            descricao: despesa.descricao,
            valor: despesa.valor
        }
    });

    console.log(listaSimples);
}

getListaDespesasSimples();