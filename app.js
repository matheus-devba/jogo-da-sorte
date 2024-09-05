let listSecretos = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

textoInicial();


console.log(numeroSecreto);


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
    
}

function textoInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1  e ${numeroLimite}.`);
}

function verificarChute(){

        let inputNumero = document.querySelector('input').value;

        if (numeroSecreto != inputNumero) {
        if (numeroSecreto > inputNumero) {
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p',`Número secreto maior.`)
        }
        if (numeroSecreto < inputNumero) {
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p','Número secreto menor.');
        }
        limparCampo();
        }
        
        if (inputNumero == numeroSecreto) {
            
            exibirTextoNaTela('h1','Acertou!');
            exibirTextoNaTela('p',`Você acertou o número secreto na ${tentativas}ª tentativa.`);
            document.getElementById('chute').setAttribute('disabled', true);
            document.getElementById('reiniciar').removeAttribute('disabled');

            
        }

        tentativas ++;
        console.log(listSecretos);
       ;
        
    
}

function limparCampo(){
 inputNumero = document.querySelector('input');
 inputNumero.value = ''

}

function newGame() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chute').removeAttribute('disabled');


    
}


function gerarNumeroAleatorio() {
    let numeroPC =  parseInt(Math.random()* numeroLimite) + 1;
    let quantidadeDeElementos = listSecretos.length;


    if (quantidadeDeElementos == numeroLimite){
        listSecretos= [];
    }

    if (listSecretos.includes(numeroPC)){
        return gerarNumeroAleatorio();
    } else {
        listSecretos.push(numeroPC);
        return numeroPC;
    }
}