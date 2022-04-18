var altura;
var largura;
var vida = 3
var tempo = 30
var dificuldade = 1500



var nivel = window.location.search
nivel = nivel.replace('?', ' ')




if (nivel === 'facil') {
    dificuldade = 2000

}
if (nivel === 'normal') {

    dificuldade = 1500
}
if (nivel === 'dificil') {

    dificuldade = 1000

}





tamanhoTelaJogo()


function tamanhoTelaJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;
}


function criarImagem() {
    //remover  imagem caso   exista    

    let id_ladrao = document.getElementById('ladrao');



    if (id_ladrao) {

        id_ladrao.remove();

        //remover coracao cheio e acrescentar coraçao vazio
        document.getElementById('v' + vida).src = '/assets/coracao_vazio.png'
        vida--

    }






    //definindo uma posiçao randomica 
    var posicaoX = Math.floor(Math.random() * largura) - 200
    var posicaoY = Math.floor(Math.random() * altura) - 200

    posicaoY <= 0 ? posicaoY = 0 : posicaoY = posicaoY;
    posicaoX <= 0 ? posicaoX = 0 : posicaoX = posicaoX;

    var ladrao = document.createElement("IMG");
    ladrao.setAttribute('src', 'assets/animation-unscreen.gif')
    ladrao.style.top = posicaoY + 'px';
    ladrao.style.left = posicaoX + 'px';
    ladrao.style.position = 'absolute';
    ladrao.className = tamanhoImageAleatorio() + "  " + virarImagem();
    ladrao.id = 'ladrao';
    ladrao.onclick = function() {
        this.remove()

    }
    document.body.appendChild(ladrao);

}


function tempoCoracaoTempoCrinometro() {


    //tratando  quando ganha ou perde

    if (vida <= 0) {

        window.location.href = '/game_over.html'


        clearInterval(funcoesTempo)
    }

    if (tempo > 0) {

        tempo--

        document.getElementById('cronometro').innerHTML = tempo;


    } else {
        window.location.href = '/fim_ganhou.html'
        clearInterval(funcoesTempo)

    }




}




function tamanhoImageAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {

        case 0:
            return 'tamanho-mosquito-1'

        case 1:
            return 'tamanho-mosquito-2'
        case 2:
            return 'tamanho-mosquito-3'
    }





}

function virarImagem() {

    var virarAleatorio = Math.floor(Math.random() * 2)

    switch (virarAleatorio) {
        case 0:
            return 'virar-imagem-2'
        case 1:
            return ''
    }

}


//todas as funcoes que nescecita de um determinado tempo tempo */
function funcoesTempo() {

    tempoCoracaoTempoCrinometro()
    criarImagem()
}

setInterval(funcoesTempo, dificuldade)