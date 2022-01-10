const prompt = require('prompt-sync')();
const areaPintar = parseInt(prompt("Informe a área a ser pintada: "));
const totalLitrosNecessario = areaPintar / 6;

function calculaLatas() {
    // total de latas
    const totalLatas = totalLitrosNecessario / 18;
    let total = totalLatas.toFixed(0);
    
    if (totalLatas > total) {
        total++;
    }
    
    console.log('total de latas: ', total);
    console.log('Valor total: ', (total * 80.00).toFixed(2));    
}

function calculaGaloes() {
    // total de Galoes
    const totalGaloes = totalLitrosNecessario / 3.6;
    let total = totalGaloes.toFixed(0);
    
    if (totalGaloes > total) {
        total++;
    }
    
    console.log('total de Galoes: ', total);
    console.log('Valor total: ', (total * 25.00).toFixed(2));    
}

function calculaMisturado() {
    // add 10%
    let area = areaPintar * 1.10;

    let totLatas = 0;

    while (area >= 64.8) {
        totLatas++;
        area -= 108;
    }

    let totGaloes = 0;

    if (area > 0) {
        const litros = area / 6;
        const totGaloesAux = litros / 3.6;
        totGaloes = totGaloesAux.toFixed(0);
        
        if (totGaloesAux > totGaloes) {
            totGaloes++;
        }    
    }

    const valorLatas = (totLatas * 80);
    const valorGaloes = (totGaloes * 25);

    console.log('----- misturado -----');
    console.log('latas: ', totLatas);
    console.log('total latas: ', valorLatas.toFixed(2));
    console.log('galoes: ', totGaloes);
    console.log('total galoes: ', valorGaloes.toFixed(2));
    console.log('total geral: ', (valorLatas + valorGaloes).toFixed(2));
}

calculaLatas();
calculaGaloes();
calculaMisturado();