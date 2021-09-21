var SubTitleEf = document.getElementById("Bloco1")


//Entrada do mouse
SubTitleEf.onmouseenter = function (){
    let cont = 24
    let textPrimi = "Digite aqui o vídeo que deseja procurar."
    let textPH=""
    
var Rod1 =  setInterval(() => {
                document.getElementById("stl").style.fontSize = `${cont}px`
                SubTitleEf.style.paddingTop = `${cont}px`
                cont-=0.1

                if(cont <=16){
                    clearInterval(Rod1)

                    document.getElementById("SetInput").innerHTML = `
                    <input type="text" id="Digiter" placeholder="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="h-6 w-6" fill="none" viewBox="0 0 24 24" >
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                    `
                }
    }, 1);

    let growin = 0
    let f3 = 0

    var Opn1 = setInterval(() => {
        document.getElementById("Digiter").style.width = `${growin}px`
        growin+=2

            if(growin>=350){
                clearInterval(Opn1)

                var compText = setInterval(() => {
                    textPH+=textPrimi[f3]
                    document.getElementById("Digiter").placeholder = `${textPH}_`
                    f3++
            
                    if(f3>=textPrimi.length){
                        clearInterval(compText)
                    }
                }, 100);

            }
        }, 1);
}

//Saída do mouse
SubTitleEf.onmouseleave = function (){
    let cont = 16
    
var Rod2 =  setInterval(() => {
                document.getElementById("SetInput").innerHTML = ""

                document.getElementById("stl").style.fontSize = `${cont}px`
                SubTitleEf.style.paddingTop = `${cont+0.2}px`
                cont+=0.1

                if(cont >=24){
                    clearInterval(Rod2)
                    document.getElementById("Digiter").placeholder = ""
                    f3=0
                    console.log(f3)
                }
    }, 1);
}

//Área de configuração das informações
let msInfo  = 0
let CorpoDaInform = [
    '<p id="tInf">1. O Master Player é um player de vídeo online e gratuito que roda com um mínimo de tráfego de dados.</p>',
    '<p id="tInf">2. Tem seu funcionamento baseado em JavaScript com mecanismos simplificados que o deixam mais ágil.</p>',
    '<p id="tInf">3. Então deixa de ser burro e use logo o Master Player Vídeo. 🤣👍</p>'
]

document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo];

var BotVol = document.getElementById("BotVoltar")
var BotAva = document.getElementById("BotAvancar")

BotVol.onclick = function(){
    msInfo--

    if(msInfo<= -1){
        msInfo=2
    }

    switch(msInfo){
        case 0: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
        case 1: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
        case 2: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
    }

    document.getElementById("tInf").style.opacity = 0
    document.getElementById("tInf").style.marginLeft = `${-10}px`
    let AumOpac = 0
    let Inv = -1

    var opni = setInterval(() => {
        document.getElementById("tInf").style.opacity = `${AumOpac}`
        document.getElementById("tInf").style.marginLeft = `${(Inv*10)}px`
        AumOpac+=0.1
        Inv+=0.1

        if(AumOpac>1){
            clearInterval(opni)
        }
    }, 50);
}

BotAva.onclick = function(){
    msInfo++

    if(msInfo>=3){
        msInfo=0
    }

    switch(msInfo){
        case 0: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
        case 1: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
        case 2: document.getElementById("campInfo").innerHTML = CorpoDaInform[msInfo]; break;
    }
    
    document.getElementById("tInf").style.opacity = 0
    document.getElementById("tInf").style.marginLeft = `${10}px`
    let AumOpac = 0
    let Inv = 1

    var opni = setInterval(() => {
        document.getElementById("tInf").style.opacity = `${AumOpac}`
        document.getElementById("tInf").style.marginLeft = `${(Inv*10)}px`
        AumOpac+=0.1
        Inv-=0.1

        if(AumOpac>1){
            clearInterval(opni)
        }
    }, 50);
}

//------Vídeo----------
var areaVideo = document.getElementById("vidEsp")
var campoVideo = document.getElementById("MeuVideo")
var botaoPlay = document.getElementById("playBut")

var m10 = document.getElementById("move10")
var b10 = document.getElementById("back10")

botaoPlay.onclick = function(){
    if(campoVideo.paused){
        campoVideo.play()
        botaoPlay.src = "icones/pause_white_24dp.svg"
        BotAum("icones/play_arrow_white_24dp.svg")
    } else{
        campoVideo.pause()
        botaoPlay.src = "icones/play_arrow_white_24dp.svg"
        BotAum("icones/pause_white_24dp.svg")
    }
}

campoVideo.onended = function() {
    botaoPlay.src = "icones/replay_white_24dp.svg"
}

m10.onclick = function() {
    BotAum("icones/forward_10_white_24dp.svg")
    campoVideo.currentTime+=10
}

b10.onclick = function() {
    BotAum("icones/replay_10_white_24dp.svg")
    campoVideo.currentTime-=10
}

//----

let contVi = 0

var VideoSets = {
    titulo: document.getElementById("vidTitulo"),
    painel: document.getElementById("barSet")
}
var AudControl = document.getElementById("volControl"); //Esta barra de volume já foi declarada logo aqui


//ACERTAR : USAR TRY CATCH
let auther = 0

areaVideo.onmouseover = function(){
    
    if(auther==0){
        try{
            clearInterval(falling);
        } finally{
            mostrando();
        }
    }
}

areaVideo.onmouseleave = function(){
    if(auther==1){
        try{
            clearInterval(showing);
        } finally{
            fechando();
        }
    }
}

function mostrando() {
    auther=1

    showing = setInterval(() => {
        VideoSets.titulo.style.opacity = `${contVi}`
        VideoSets.painel.style.opacity = `${contVi}`
        AudControl.style.opacity = `${contVi}`
    
        contVi+=0.2
    
        if(contVi>1){
            contVi=1
            clearInterval(showing)
        }
    }, 50);
}

function fechando() {
    auther=0

    falling = setInterval(() => {
        VideoSets.titulo.style.opacity = `${contVi}`
        VideoSets.painel.style.opacity = `${contVi}`
        AudControl.style.opacity = `${contVi}`
    
        contVi-=0.2
    
        if(contVi<0){
            contVi=0
            clearInterval(falling)
        }
    }, 50);
}

//Tempo do vídeo (duração e corrido)
var durTotal = document.getElementById("MeuVideo");

function daZero(valor) {
    let numero = valor >= 10 ? valor : `0${valor}`;
    return numero;
}

function timeVid() {
    return `${daZero(Math.trunc(durTotal.currentTime/60))}:${daZero(Math.trunc(durTotal.currentTime%60))} / ${daZero(Math.trunc(durTotal.duration/60))}:${daZero(Math.trunc(durTotal.duration%60))}`
}

var barraInt = document.getElementById("inBar");
barraInt.value = 0;

durTotal.onloadedmetadata = (event)=>{
    setInterval(() => {
        document.getElementById("tempoVideo").innerHTML = timeVid();
        barraInt.max = campoVideo.duration;

        !durTotal.controls;
    }, 500);
}

//RUNNER
var cent = document.getElementById("runner")
let runGrow = 64
let ddo = 1

function BotAum(ender) {
    var mov = setInterval(() => {
        cent.src = ender;
        cent.style.width = `${runGrow}px`;
        cent.style.opacity = `${ddo}`;

        runGrow++
        ddo-=0.015

        if(runGrow>128){
            runGrow=64;
            ddo=1

            cent.style.width = `${runGrow}px`;
            cent.style.opacity = `0`;

            clearInterval(mov)
        }
    }, 1);
}

//Sistema de Volume
/*A barra de volume "AudControl" já foi declarada junto à barra de título e à barra de sets*/
var SoundTool = document.getElementById("soundT");
campoVideo.volume = (AudControl.value*0.01);
let cser = false;

AudControl.onmousemove = function(params) {
    campoVideo.volume = (AudControl.value*0.01);

    if(campoVideo.volume == 0 || campoVideo.muted){
        SoundTool.src = "icones/volume_off_white_24dp.svg";
    } else{
        SoundTool.src = "icones/volume_up_white_24dp.svg"
    }
}

SoundTool.onclick = function() {
    cser = !cser
    
    if(cser == true){
        AudControl.style.visibility = "visible"
    } else{
        AudControl.style.visibility = "hidden"
    }
}

//Acertar
/*SoundTool.ondblclick = function() {
    if(campoVideo.volume != 0){
        SoundTool.src = "icones/volume_off_white_24dp.svg";
        campoVideo.volume = 0
    } else{
        campoVideo.volume = (AudControl.value*0.01);
        SoundTool.src = "icones/volume_up_white_24dp.svg"
    }
}*/

//inBar
function mostraBar() {
    proa = setInterval(() => {
            barraInt.value = `${campoVideo.currentTime}`
    }, 1000);
};

mostraBar();

barraInt.onmouseup = function(params) {
    clearInterval(proa);
    campoVideo.currentTime = barraInt.value;
    mostraBar();
};

//Data no footer
dataAtual = document.getElementById("dataHoje");
const TheData = new Date();
dataAtual.innerHTML = `${TheData}`
dataAtual.innerHTML = `${String(TheData.getDate()).padStart(2, '0')}/${String(TheData.getMonth()+1).padStart(2, '0')}/${String(TheData.getFullYear())} às ${String(TheData.getHours()).padStart(2, '0')}:${String(TheData.getMinutes()).padStart(2, '0')}:${String(TheData.getMinutes()).padStart(2, '0')}`;

//IMPEDIDOR DO CLIQUE DIREITO DO MOUSE
areaVideo.oncontextmenu= function () {
    return false
}

/*OBs:
Na hora de declarar a função, pode-se usar:

new Function ("return false")

*/


//Acionador de FULLSCREEN
let TC = document.getElementById("TelCheia");

TC.onclick = function () {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      TC.src = "./icones/fullscreen_white_24dp.svg";
      campoVideo.style.height="initial";

      VideoSets.painel.style.top = "341px";
      areaVideo.style.backgroundColor = "#F8CA00";
    } else {
      document.getElementById("vidEsp").requestFullscreen();
      TC.src = "./icones/fullscreen_exit_white_24dp.svg";
      campoVideo.style.height="757px";

      VideoSets.painel.style.top = "738px";
      areaVideo.style.backgroundColor = "black";
    }
}

setInterval(() => {
    if(document.fullscreenElement == null){
                document.exitFullscreen()
                TC.src = "./icones/fullscreen_white_24dp.svg";
                campoVideo.style.height="initial";
          
                VideoSets.painel.style.top = "341px";
                areaVideo.style.backgroundColor = "#F8CA00";
                AudControl.style.top = "171px";
    } else {
        AudControl.style.top = "412px";
    }
}, 100);


//Sistema Opções
document.getElementById("opts").onclick = function() {
    alert("❗️ Esta opção está indisponível no momento.")
}