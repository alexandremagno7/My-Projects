(function() {
function take(query) {
    return document.querySelector(query)
}

function vencedor() {
    info.classList.add('negrito');
    
    setInterval(()=>{
        info.classList.toggle('contorno');
    },300);
}

function reiniciarJogo() {

    const b = document.createElement('buttom');
    b.innerText = '🔁 CLIQUE AQUI PARA REINICIAR';
    b.title = 'Clique aqui para reiniciar';
    b.classList.add('reiniciar-jogo');
    b.onclick = function() {
        location.reload();
    }

    const p = document.createElement('p');
    p.appendChild(b);

    relatorios.appendChild(p);
}

function detectorDeVencedor(conjunto) {
    let haVitorioso = false;

    informador(starter); //Aqui ele é chamado apenas 1x

    if (numeroJogada >=5){
        const acerto = (i, tipo) => conjunto[i].classList.contains(`tipo-${tipo}`);
        const linhasDeVitoria = ['012','345','678','036','147','258','048','246'];

        for(linha of linhasDeVitoria){
           if(acerto(linha[0],'x') & acerto(linha[1],'x') & acerto(linha[2],'x')){

                conjunto[linha[0]].classList.add('vitoria');
                conjunto[linha[1]].classList.add('vitoria');
                conjunto[linha[2]].classList.add('vitoria');

                if(!haVitorioso){ //Essa condicional evita dupla chamada de 'vencedor()' e 'reiniciarJogo()'
                    vencedor();
    
                    conjunto.forEach(esp => esp.classList.add('marcado'));
                    haVitorioso = true;
                    info.title = 'O jogador do x venceu!';
                    info.innerHTML = 'JOGADOR ❌ VENCEU! 💪<span>😁🙌</span>';
                    reiniciarJogo();
                }

            } else if(acerto(linha[0],'o') & acerto(linha[1],'o') & acerto(linha[2],'o')){

                conjunto[linha[0]].classList.add('vitoria');
                conjunto[linha[1]].classList.add('vitoria');
                conjunto[linha[2]].classList.add('vitoria');

                if(!haVitorioso){ //Essa condicional evita dupla chamada de 'vencedor()' e 'reiniciarJogo()'    
                    vencedor(); //Há dupla chamada em caso de vitória em mais de uma linha
    
                    conjunto.forEach(esp => esp.classList.add('marcado'));
                    haVitorioso = true;
                    info.title = 'O jogador do círculo venceu!';
                    info.innerHTML = 'JOGADOR ⭕️ VENCEU! 💪<span>😁🙌</span>';
                    reiniciarJogo();
                }

            }
        }
    }
    
    if (numeroJogada > 8){
        if(!haVitorioso){
            vencedor();
            info.title = 'Ninguém ganhou porque deu velha.';
            info.innerHTML = 'Deu velha! 👵🤣';
            reiniciarJogo();
        }
    }
}

function marcadorDeEspacos(esp, tipo, imagem) {
    esp.classList.add(tipo); /* 'tipo-x' ou 'tipo-o'*/
    esp.classList.remove('opcao');
    esp.classList.add('marcado');
    esp.title = `Esta área já foi marcada com o ${imagem === 'O' ? 'círculo' : imagem.toLowerCase()}. Escolha outra.`;
    esp.innerHTML = imagem /*X ou O*/
    numeroJogada++
    detectorDeVencedor(conjuntoEspacos);
}

function informador(verdadeiroOuFalso) {
    if(verdadeiroOuFalso) {
        info.innerHTML = 'Vez do jogador ❌.';
        info.title = 'É a vez do jogador do x jogar.';
    } else {
        info.innerHTML = 'Vez do jogador ⭕️.';
        info.title = 'É a vez do jogador do círculo jogar.';
    };
}

function insereEspacosParaMarcar() {

    for(let i = 0; i < 9; i++){
        const espaco = document.createElement('div');
        espaco.id = `espaco${i+1}`;
        espaco.title = `${i+1}º espaço de cima para baixo, da esquerda para a direita.`
        espaco.classList.add('opcao');
        espaco.onclick = function() {
            if (starter){
                if(!espaco.classList.contains('marcado')){

                    starter = !starter;
                    marcadorDeEspacos(espaco,'tipo-x','X');
                    //informador(starter);
                }
            } else {
                if(!espaco.classList.contains('marcado')){
                    
                    starter = !starter;
                    marcadorDeEspacos(espaco,'tipo-o','O');
                    //informador(starter);
                }
            }
        };
        conjuntoEspacos.push(espaco);
        areaDoJogo.appendChild(espaco);
    }

}

function opcaoSelecionada() {
    if(this.classList.contains('tipo-x')) starter = true;
    if(this.classList.contains('tipo-o')) starter = false;

    informador(starter); //Analisar se é o melhor posicionamento para chamada

    textoSelecao.classList.add('desable');
    
    areaDoJogo.classList.add('grid-enable');
    areaDoJogo.classList.remove('desable');

    relatorios.classList.remove('desable');

    insereEspacosParaMarcar();
}

const opcao = document.querySelectorAll('.opcao');
const textoSelecao = take('.texto-selecao');
const areaDoJogo = take('.area-do-jogo');
const relatorios = take('.area-de-relatorios');
const info = take('.info');
const conjuntoEspacos = [];
let numeroJogada = 0;
let starter;

opcao.forEach(opt => opt.onclick = opcaoSelecionada)
})();

console.log(`
.:Olá!:.

Tecnologias usadas:

- HTML;
- CSS;
- Javascript.

`)