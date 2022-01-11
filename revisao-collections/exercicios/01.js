const despesas = require('../base/lista-despesas')();

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

const maiorDespesa = getMaiorDespesa();
console.log(maiorDespesa);
