const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está vendo um novo modelo de caminhão em uma feira de veículos. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível! Adoro ver as inovações no setor de caminhões.",
                afirmacao: "Ficou animado com as novas tecnologias e tendências em caminhões."
            },
            {
                texto: "Isso parece um exagero. Não vejo necessidade de tantas mudanças.",
                afirmacao: "Sentiu que a inovação pode ser excessiva e desnecessária."
            }
        ]
    },
    {
        enunciado: "Um fabricante de caminhões pede que você escreva um relatório sobre a importância das tecnologias avançadas nos caminhões. Qual é a sua abordagem?",
        alternativas: [
            {
                texto: "Utilizo informações de sites especializados e explico como a tecnologia pode melhorar a eficiência dos caminhões.",
                afirmacao: "Focou em mostrar os benefícios práticos das tecnologias avançadas em caminhões."
            },
            {
                texto: "Escrevo o relatório com base em conversas com colegas e minhas próprias observações sobre caminhões.",
                afirmacao: "Prefere utilizar conhecimentos pessoais e experiências para elaborar o relatório."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre o futuro dos caminhões, você é questionado sobre como as tecnologias impactarão o setor. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia pode trazer grandes melhorias para o setor, como caminhões mais seguros e econômicos.",
                afirmacao: "Vê as tecnologias como uma oportunidade para revolucionar o setor de caminhões."
            },
            {
                texto: "Estou preocupado com a substituição dos trabalhadores por tecnologias e acho que devemos proteger os empregos no setor.",
                afirmacao: "Preocupa-se com o impacto das tecnologias na força de trabalho e defende a proteção dos empregos."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma apresentação sobre os diferentes tipos de caminhões para um evento. Qual é o seu método?",
        alternativas: [
            {
                texto: "Crio uma apresentação utilizando um software de design para criar slides detalhados.",
                afirmacao: "Usa ferramentas tradicionais para criar uma apresentação visualmente atraente sobre caminhões."
            },
            {
                texto: "Utilizo um gerador de apresentações automatizado para acelerar o processo.",
                afirmacao: "Prefere usar tecnologias automatizadas para tornar o processo mais eficiente."
            }
        ]
    },
    {
        enunciado: "Seu grupo de trabalho está atrasado na entrega de um projeto sobre caminhões e alguém decidiu usar um gerador de conteúdo para ajudar. O que você faz?",
        alternativas: [
            {
                texto: "Não vejo problema em usar o conteúdo gerado, pois é uma forma eficiente de concluir o projeto.",
                afirmacao: "Adota uma abordagem mais prática e se acostuma a depender das tecnologias automatizadas."
            },
            {
                texto: "Reviso o conteúdo gerado e adiciono minhas próprias ideias para garantir que o trabalho reflita nosso ponto de vista.",
                afirmacao: "Entende que a tecnologia deve ser usada como auxílio, mas o trabalho final deve refletir o esforço e a perspectiva do grupo."
            }
        ]
    },


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();