let jogo;
let jogadores;

function login(){
    const anoUsuario = Number.parseInt(prompt('Informe seu ano de nascimento'))
    const anoAtual = 2022
    const idadeCalculada = anoAtual - anoUsuario

    if(idadeCalculada >= 17){
        const habilitaJogo = document.querySelector('.jogo')
        habilitaJogo.classList.remove('escondido')
    }else{
        const aviso = document.querySelector('.aviso')
        aviso.classList.add('perigo')
        aviso.innerHTML = `Esse jogo não é recomendado para pessoas com ${idadeCalculada} anos`
    }
}

function selecionarJogo(classeBotao, nomeExibicao){
    jogo = nomeExibicao
    const selecionado = document.querySelector('.tipo-jogo .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }

    const seletor = classeBotao
    const botao = document.querySelector(seletor)
    botao.classList.add('selecionado')
   
}

function selecionarJogadores(classeBotao, nomeExibicao){
    jogadores = nomeExibicao
    const selecionado = document.querySelector('.qtd-jogadores .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }

    const seletor = classeBotao
    const botao = document.querySelector(seletor)
    botao.classList.add('selecionado')
   
}

function continuar(){
    const areaJogo = document.querySelector('.jogo')
    areaJogo.classList.add('escondido')

    const areaResumo = document.querySelector('.resumo')
    areaResumo.classList.remove('escondido')

    const resultado = document.querySelector('.carregando-jogo')
    resultado.innerHTML = `
    
    <p class="resultado">O jogo escolhido foi: <span>(${jogo})</span></p>
    <p class="resultado">Com <span>(${jogadores})</span> jogadores</p>
    
    `
}