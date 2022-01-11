const parcelas = require('../base/lista-parcelas')();

function isDividaQuitada() {
    for (let i = 0; i < parcelas.length; i++) {
        if (!parcelas[i].pago) {
            return false;
        }

    }

    return true;
}

function temParcelaAberta() {
    for (let i = 0; i < parcelas.length; i++) {
        if (!parcelas[i].pago) {
            return true;
        }

    }

    return false;
}

console.log('is divida paga: ', isDividaQuitada());
console.log('tem parcela a pagar: ', temParcelaAberta());
