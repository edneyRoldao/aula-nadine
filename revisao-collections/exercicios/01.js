const despesas = require('../base/listas')();

function getMaiorDespesa() {
    if (!despesas.length) {
        return null;
    }

    let despesa = despesas[0];

    for (i = 1; i < despesas.length; i++) {
        if (despesas[i].valor > despesa.valor) {
            despesa = despesas[i];
        }
    }

    return despesa;
}

function getDespesaPorNome(nome) {

}

const maiorDespesa = getMaiorDespesa();
console.log(maiorDespesa);
