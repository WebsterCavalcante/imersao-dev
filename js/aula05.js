// PARTE 1: Lista de perguntas e respostas
let perguntas = [
  {
    //primeira pergunta
    pergunta: 'Ao cair da noite,chega sem ter sido buscado e ao raiar do dia se perde-se sem ter sido roubado.',
    respostas: [
      { opcao: 'As Estrelas', correto: true },
      { opcao: 'A Lua', correto: false },
      { opcao: 'O Sol', correto: false },
    ]
  },
  {//segunda
    pergunta: 'Esta coisa devora todas as coisas: pássaros, animais, árvores, flores; transforma pedras duras em farinha; mata reis, destrói cidades; e derruba grandes imperios.',
    respostas: [
      { opcao: 'O Exercito', correto: false },
      { opcao: 'O Tempo', correto: true },
      { opcao: 'A Natureza', correto: false }
    ]
  },
  {//terceira
    pergunta: 'O que pode trazer os mortos de volta; fazer você chorar, fazer você rir, fazer você ser você; nasce em um instante, mas dura a vida inteira?',
    respostas: [
      { opcao: 'O Nome', correto: false },
      { opcao: 'Uma Piada', correto: false },
      { opcao: 'A Lembrança', correto: true }
    ],
  },
  {//qauarta
    pergunta: 'Nunca descansa, nunca fica parado; move-se lentamente de colina em colina; não anda, não corre ou trota.',
    respostas: [
      { opcao: 'O Vento', correto: false },
      { opcao: 'O Sol', correto: true },
      { opcao: 'A Chuva', correto: false }
    ],
  },
  {//quinta
    pergunta: 'Com um pouco de barro minha toca faço, com dolorosa  picada de minha presa me desfaço',
    respostas: [
      { opcao: 'Uma Cobra', correto: false },
      { opcao: 'Uma Vespa', correto: false },
      { opcao: 'Uma Aranha', correto: true }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
