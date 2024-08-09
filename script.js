const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está dirigindo seu caminhão quando se depara com um novo modelo de caminhão autônomo que promete tornar o transporte mais eficiente. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Inicialmente ficou preocupado com o impacto que essa tecnologia poderia ter no mercado de trabalho dos motoristas."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Ficou empolgado com as possibilidades que a nova tecnologia poderia oferecer para melhorar a eficiência do transporte."
            }
        ]
    },
    {
        enunciado: "Com a introdução dos caminhões autônomos, a empresa onde você trabalha decidiu implementar uma nova frota. O que você faz para se adaptar a essa mudança?",
        alternativas: [
            {
                texto: "Participa de um treinamento sobre como operar e gerenciar caminhões autônomos e aprende a utilizar as novas ferramentas e tecnologias.",
                afirmacao: "Conseguiu se adaptar à nova tecnologia e utilizá-la para otimizar o trabalho no transporte."
            },
            {
                texto: "Prefere continuar utilizando os métodos tradicionais e procura maneiras de ajustar seu trabalho para acomodar a mudança sem alterar muito a rotina.",
                afirmacao: "Sentiu-se mais confortável mantendo os métodos tradicionais e encontrou formas de integrar as novas tecnologias aos processos existentes."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião para discutir o impacto dos caminhões autônomos no setor de transporte, você precisa expressar sua opinião sobre como a tecnologia pode mudar o futuro da profissão. Qual é a sua posição?",
        alternativas: [
            {
                texto: "Acredito que caminhões autônomos podem criar novas oportunidades de trabalho em áreas como manutenção e programação, além de melhorar a segurança nas estradas.",
                afirmacao: "Acredita que a inovação tecnológica pode trazer benefícios e novos desafios ao setor de transporte."
            },
            {
                texto: "Estou preocupado com a possibilidade de perda de empregos e defendo a necessidade de proteger os motoristas e criar políticas para mitigar o impacto da automação.",
                afirmacao: "Sua preocupação com a automação levou a discussões sobre como equilibrar a tecnologia com o impacto social e econômico no setor."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma apresentação para mostrar aos colegas a sua visão sobre o futuro dos caminhões autônomos. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Cria uma apresentação utilizando ferramentas de design gráfico para ilustrar as vantagens e desvantagens dos caminhões autônomos.",
                afirmacao: "Optou por usar ferramentas de design para comunicar visualmente suas ideias e ajudou outros a entender a tecnologia."
            },
            {
                texto: "Utiliza um gerador de gráficos baseado em IA para criar imagens e visualizações que ajudem a explicar a evolução e o impacto dos caminhões autônomos.",
                afirmacao: "Acelerou o processo de criação utilizando ferramentas de IA e agora pode ensinar colegas a aproveitar essas tecnologias também."
            }
        ]
    },
    {
        enunciado: "Você e seu grupo estão trabalhando em um projeto sobre a eficiência dos caminhões autônomos para entregar na próxima semana, mas a tarefa está um pouco atrasada. Um dos membros usou um gerador de texto para completar o projeto. Como você reage?",
        alternativas: [
            {
                texto: "Acredita que usar um gerador de texto é uma forma válida de completar o trabalho e não vê problemas em utilizar o texto gerado.",
                afirmacao: "Acabou se acostumando a utilizar a tecnologia para todas as tarefas e agora sente uma dependência crescente da IA."
            },
            {
                texto: "Reconhece que, embora a IA possa ser útil, é importante revisar o trabalho e contribuir com a perspectiva pessoal para garantir a qualidade e a originalidade.",
                afirmacao: "Percebeu que os textos gerados pela IA devem ser apenas uma ajuda e que é essencial incluir contribuições pessoais para um trabalho mais autêntico."
            }
        ]
    }
];

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
