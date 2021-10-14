(function()
{const comecarGame = document.querySelector('#campoSeleciona');

let campoTabela = document.getElementById('campMain');

let conjImgs = [];

let pontuacao = 0;

let jogada = 0;

let imagemUltimoClique;

let TituloGame = document.body.querySelector('header h1');

function abertura2() {
    let j = 0;
    let decrem = setInterval(() => {
        TituloGame.style.textShadow = `${j}px 2px #0000007c`;
        j+=0.02;

        if(j>5){
            clearInterval(decrem);
        }
    }, 5);
}

function abertura1() {
    let i = 70;

    let decrem = setInterval(() => {
        TituloGame.style.letterSpacing = `${i}px`;
        i--;

        if(i===1){
            clearInterval(decrem);
            abertura2();
        }
    }, 20);
}

abertura1();

function efeitoCaixaTexto(caixa) {
    let i = 0;
    const descedor = setInterval(() => {
                        caixa.style.marginTop = `${i+20}px`;
                        caixa.style.opacity = `${i/10}`;
                        i+=0.2;
                        if(i>100){
                            clearInterval(descedor);
                        }
                    }, 1);
}

function caixaMensagem(texto) {
    const fundo = document.createElement('div');
    fundo.classList.add('fundoMensagem');

    const textBox = document.createElement('div');
    textBox.classList.add('caixaTexto');

    const titulo = document.createElement('div');
    titulo.classList.add('tituloMens');
    titulo.innerHTML = '<b>ATENÇÃO!</b>';

    const minhaMensagem = document.createElement('p');
    minhaMensagem.classList.add('minhaMens');
    minhaMensagem.innerHTML = `${texto}`;

    textBox.appendChild(titulo);
    textBox.appendChild(minhaMensagem);

    document.body.appendChild(fundo);
    fundo.appendChild(textBox);

    efeitoCaixaTexto(textBox);

    let i = 0;

    let suaviza = setInterval(() => {
        fundo.style.setProperty('--blurFundo',`blur(${i}px)`);
        fundo.style.backgroundColor = `rgba(0, 0, 0, ${i/10})`;
        i+=0.1;

        if(i>=4){
            clearInterval(suaviza);
        }
    }, 15);
}

function analiseDeAcerto(imagem,valor) {
    let rodape = document.querySelector('.rodape');

    jogada++;

    if(imagem === imagemUltimoClique){
        pontuacao++;
        rodape.innerHTML = `<b>Pontuação: ${pontuacao}/${valor}</b>`;
    }

    imagemUltimoClique = imagem;

    if(jogada === (valor*2)){
        caixaMensagem(`<b>Fim de Jogo!<br>
                Você acertou ${pontuacao} de ${valor}!</b><br>
                Pressione F5 para recomeçar.
        `);
    }
}

function fadeOut(elemento) {
    i=1;
    let diminuidor = setInterval(() => {
                        elemento.style.opacity = i;
                        i=i-0.05;

                        if(i<0.1){
                            elemento.parentNode.removeChild(elemento);
                            //elemento.style.display = 'none';
                            clearInterval(diminuidor);
                        }

                    }, 10);
}

function tapaCarta(valor) {
    let i = 1;
    let novoElem;
    
    while(i<=valor*2){
        novoElem = document.createElement('div')
        novoElem.classList.add('tapador');

        novoElem.addEventListener('click',(e)=>{
            fadeOut(e.target);
            imagemDaCarta = e.target.parentNode.style.backgroundImage;
            analiseDeAcerto(imagemDaCarta,valor);
        });

        document.getElementById(`card${i}`).appendChild(novoElem);
        
        i++
    }
}

function geradorDeImagens(maxImgs) {   
    let i = 1;
    while(i <= maxImgs){
        let escolhido = Math.floor(Math.random() * (maxImgs*2))

        if(!conjImgs[escolhido]){
            conjImgs[escolhido] = `img${i}`;
            i++
        }

    }

    i=1;

    while(i <= maxImgs){
        let escolhido = Math.floor(Math.random() * (maxImgs*2))

        if(!conjImgs[escolhido]){
            conjImgs[escolhido] = `img${i}`;
            i++
        }

    }
}

function contagemRegressiva(tempo) {
    let rodape = document.querySelector('.rodape')
    const total = tempo;
    tempo*=2;

    rodape.innerHTML=`Prepare-se!`;
    
    contador = setInterval(()=>{
                    rodape.innerHTML=`<b>O game se iniciará em: ${tempo}.</b>`;
                    tempo--;

                    if(tempo<0){
                        clearInterval(contador);

                        tapaCarta(total);

                        rodape.innerHTML = `<b>Pontuação: ${pontuacao}/${total}</b>`;
                    }
                },1000);
}

function redimenionaMain(tam) {
    campoTabela.style.width = `${(100*(tam/2)+(10*((tam-1)/2)))+20}px`;
}

function jogaNaTabela(myCards) {
    campoTabela.innerHTML = '';

    for(carta of myCards){
        campoTabela.appendChild(carta);
    }
}

function criaCarta(totalCartas) {
    let i = 0;
    let conjuntoCartas = [];
    let novaCard;

    while(i < (totalCartas*2)){
        novaCard=document.createElement('div');
        novaCard.classList.add('carta');
        novaCard.id = `card${i+1}`;
        novaCard.style.backgroundImage =`url('./${conjImgs[i]}.png')`;
        novaCard.style.backgroundSize =`100px`;

        conjuntoCartas.push(novaCard);
        i++;
    }

    return conjuntoCartas;
}

function geraTabela(valor) {
    campoTabela.style.display = 'grid';
    campoTabela.style.gridTemplateColumns = `repeat(${valor/2},1fr)`;
    campoTabela.style.gap = '10px';
    campoTabela.style.margin = '0px auto';
    campoTabela.style.borderRadius = '5px';

    redimenionaMain(valor);

    geradorDeImagens(valor);
    const minhasCartas = criaCarta(valor);
    
    jogaNaTabela(minhasCartas);
}

function playGame(e) {
    e.preventDefault();

    const numEscolhido = parseInt(comecarGame.querySelector('#numFigs').value);

    geraTabela(numEscolhido);

    contagemRegressiva(numEscolhido);
}

comecarGame.addEventListener('submit',playGame);}
)();
console.log('Sem uso de quaisquer frameworks. Apenas Javascript purinho com HTML e CSS. ;)')