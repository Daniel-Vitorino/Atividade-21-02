let nome = prompt('Digite seu nome');
let sobrenome = prompt('Digite seu sobrenome');
const nomeCompleto = `${nome} ${sobrenome}`;
alert('Ola, ' + nomeCompleto);


function calcularICMS(preçoCusto) {
    const percentualICMS = 18;
    return (preçoCusto * percentualICMS) / 100;
}


function somarICMS(preçoCusto) {
    const icms = calcularICMS(preçoCusto);
    return preçoCusto + icms;
}


function preçoFinal() {

    const preçoCusto = parseFloat(prompt('Digite o preço de custo do produto:'));


    const preçoComICMS = somarICMS(preçoCusto);


    console.log('Preço com ICMS: R$ ' + preçoComICMS);
}


preçoFinal();