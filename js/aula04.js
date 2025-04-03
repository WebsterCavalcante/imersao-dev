// criar uma lista com 3 jogadores
let herois = ["", "", ""];
let viloes = ["", "", ""];

let info_pj = window.document.querySelector('p#informacoesJogador');
let info_pc = window.document.querySelector('p#informacoesComputador');
let info_res = window.document.querySelector('p#resultadoFinal');

let poder_heroi = 0;
let poder_vilao = 0;

for (let i = 0; i < 3; i++) {
  herois[i] = prompt('Digite o nome do seu personagem');
  // calcular a força de cada heroi para somado ser a força do time
  poder_heroi += Math.floor(Math.random() * 10) + 1;
  // codigo de seleção dos herois
  let indiceRandom = Math.floor(Math.random() * 5);
  let viloesPossiveis = [
    `O Guarda Dourado`,
    `A Inspetora Basilisco`,
    `o Guardião da Ira`,
    `Grometheus`,
    `Kikimora`
  ];
  viloes[i] = viloesPossiveis[indiceRandom];
  // calcular a força de cada Vilão para somado ser a força do time
  poder_vilao += Math.floor(Math.random() * 10) + 1;
}
alert(info_res)
// compara aforça para saber quem venceu
//não pode participar
let espaso = 0;
for (let i = 0; i < 3; i++) {
  if (herois[i] == '' || herois[i] == ' ') {
    espaso++
  }
}
if (espaso == 3) {
  info_pj.innerHTML = 'Luz, Amity e Willow não encontraram ninguém a tempo e portanto não puderam participar';

  info_pc.innerHTML = 'Boscha, a capitã do time das Banshees, passou a zombar delas sem para desde então.';

  info_res.innerHTML = `PERDEU POR W.O!`;
} else {
  if (poder_heroi == poder_vilao) {
    info_pj.innerHTML = 'O Time das Banshees estava para vencer, mas Luz e Amity usaram a manobra ariscada chamada salto raiz, empatando o jogo faltando pouco para o tempo acabar';

    info_pc.innerHTML = 'Boscha, a capitã do time das Banshees, odiou empatar como o Time dos esquisitos, desde então ela deseja uma REVANCHE';

    info_res.innerHTML = `EMPATE! O tempo acabou e ambos os Times tem ${poder_heroi} pontos`;
    //ganhou
  } else if (poder_heroi > poder_vilao) {

    info_pj.innerHTML = 'Graças os três novos integrantes o Time dos esquisitos gaanhou a partida, ainda que por pouco, mas desde então eles fazem questão de passa perto da Boscha, a capitã do time das Banshees, e esfreçar o trofeu na cara dela';

    info_pc.innerHTML = 'Boscha, a capitã do time das Banshees, ficou furiosa por perder para Willow e sempre que ela os vê senti fontade de escana-los, mas ela se controla...na medida do possivel';

    info_res.innerHTML = `VENCEU! O Time dos esquisitos venceu com ${poder_heroi} pontos, enquanto o Time das Banshees tem ${poder_vilao} pontos`;
    //perdeu
  } else {
    info_pj.innerHTML = 'O Time dos Esquisitos estava para vencer, mas Boscha conseguiu capturar o escaravelho de ouro, que segundo as regras  garante vitoria imediata a quem o pega.';

    info_pc.innerHTML = 'Boscha, a capitã do time das Banshees, passou a atormontar ainda mais a vida de Luz, Amity e Willow.';

    info_res.innerHTML = `PERDEU! O Time das Banshees venceu com vitoria automatica ao pegar o escaravelho de ouro, enquanto O Time dos Esquisitos possuia ${poder_heroi} pontos`;
  }
}