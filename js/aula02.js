//1-Fogo, 2-Água, 3-Terra, 4-Ar

function lutar(){
    let elemento_jogador = Number(window.document.querySelector('input#elemento').value);
    let elemento_pc = Math.floor(Math.random() * 4) + 1;
    let resposta = window.document.querySelector('div#res');

    if (elemento_pc == elemento_jogador){
        resposta.innerHTML = 'EMPATE! ambos usam o mesmo elemento';
    }
    if ((elemento_jogador == 1 && elemento_pc == 3) || elemento_jogador == 3 && elemento_pc == 1){
        resposta.innerHTML = 'EMPATE! Terra e Fogo não tem vantagem um sobre o outro';
    }
    if ((elemento_jogador == 2 && elemento_pc == 4) || elemento_jogador == 4 && elemento_pc == 2){
        resposta.innerHTML = 'EMPATE! Água e Ar não tem vantagem um sobre o outro';
    }
    // se o jogador usar Fogo
    if (elemento_jogador == 1) {
        if (elemento_pc == 2) {
            resposta.innerHTML = 'PERDEU! Água suprime o Fogo';
        }
        if (elemento_pc == 4) {
            resposta.innerHTML = 'VENCEU! Fogo suprime o Ar';
        }
    }
    // se o jogador usar Água
    if (elemento_jogador == 2) {
        if (elemento_pc == 1) {
            resposta.innerHTML = 'VENCEU! Água suprime o Fogo';
        }
        if (elemento_pc == 3) {
            resposta.innerHTML = 'PERDEU! Terra suprime a Água';
        }
    }
    // se o jogador usar Terra
    if (elemento_jogador == 3) {
        if (elemento_pc == 2) {
            resposta.innerHTML = 'VENCEU! Terra suprime a Água';
        }
        if (elemento_pc == 4) {
            resposta.innerHTML = 'PERDEU! Ar suprime a Terra';
        }
    }
    // se o jogador usar Ar
    if (elemento_jogador == 4) {
        if (elemento_pc == 3) {
            resposta.innerHTML = 'VENCEU! Ar suprime a Terra';
        }
        if (elemento_pc == 1) {
            resposta.innerHTML = 'PERDEU! Fogo suprime o Ar';
        }
    }
}   