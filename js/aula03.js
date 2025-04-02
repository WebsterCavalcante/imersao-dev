function aventura(){
  let rodada = 1; // variavel de controle
  while (rodada <= 3) {
    //===========================
    let escolha_jogador = window.document.querySelector('input#escolha_jogador');
    // Inicio do Controle de exceção
    while (escolha_jogador < 1 || escolha_jogador > 3) {
      alert('Digite um valor de 1 a 3');
      escolha_jogador = prompt(`Nível ${rodada} escolha um vidro 1, 2 ou 3`);
    }
    // FIm do Controle de exceção
    let escolha_pc = Math.floor(Math.random() * 3) + 1;
    //===========================
    if (escolha_jogador == escolha_pc) {
      alert("Você andou tranquilamente até que subitamente um slime apareceu! vocês lutaram bravamente, mas você perceu em batalha.");
      break; // encerra o Loop
    } else {
      alert(`Você andou tranquilamente até que subitamente um Demonio apareceu! vocês lutaram bravamente, mas seu inimigo perceu em batalha.`);
    }
    rodada++;
  }
  if (rodada == 4){
    alert('Parabens! Você escapou da Dungeon!');
  }
}

