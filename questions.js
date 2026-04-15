const questions = [
  {
    question: `Um professor de tecnologia está explicando como sistemas modernos conseguem reconhecer rostos em fotos e identificar objetos automaticamente. Ele comenta que isso é possível graças a um tipo específico de aprendizado de máquina baseado em redes neurais profundas.

O conceito descrito pelo professor é chamado de:`,
    options: [
      "Banco de dados distribuído",
      "Deep Learning",
      "Sistema operacional",
      "Programação orientada a objetos"
    ],
    answer: 1,
    explanation: "Deep Learning é um subconjunto de Machine Learning que utiliza redes neurais com múltiplas camadas para aprender padrões complexos em imagens, voz, texto e outros tipos de dados."
  },
  {
    question: `Durante uma aula, a professora compara o funcionamento de modelos de Deep Learning com o cérebro humano, explicando que ambos possuem estruturas que processam informações em camadas.

Essa comparação se refere a:`,
    options: [
      "Servidores em nuvem",
      "Sistemas embarcados",
      "Redes neurais artificiais",
      "Linguagens de programação"
    ],
    answer: 2,
    explanation: "As redes neurais artificiais foram inspiradas na ideia de neurônios conectados, processando sinais em diferentes etapas até chegar a um resultado."
  },
  {
    question: `Uma empresa está desenvolvendo um sistema capaz de identificar fraudes em transações bancárias. Para isso, utiliza um modelo computacional inspirado na forma como neurônios se conectam e trocam informações.

Esse modelo é conhecido como:`,
    options: [
      "Algoritmo de ordenação",
      "Rede neural artificial",
      "Sistema de arquivos",
      "Banco de dados relacional"
    ],
    answer: 1,
    explanation: "A rede neural artificial é um modelo matemático inspirado no cérebro. Ela recebe entradas, realiza cálculos internos e gera saídas úteis para previsão ou classificação."
  },
  {
    question: `Em uma rede neural, existem pequenas unidades responsáveis por receber informações, realizar cálculos e gerar uma saída, de forma semelhante aos neurônios biológicos.

Essas unidades são chamadas de:`,
    options: [
      "Pixels",
      "Neurônios artificiais",
      "Arquivos",
      "Variáveis"
    ],
    answer: 1,
    explanation: "Os neurônios artificiais são as unidades básicas da rede. Cada um combina entradas, pesos e bias para gerar uma resposta."
  },
  {
    question: `Ao estudar redes neurais, um aluno percebe que os dados passam por diferentes etapas até chegar ao resultado final, sendo transformados em cada uma dessas etapas.

Essas etapas são chamadas de:`,
    options: [
      "Protocolos",
      "Camadas",
      "Drivers",
      "Interfaces"
    ],
    answer: 1,
    explanation: "As camadas organizam o fluxo de processamento dos dados. Elas podem ser de entrada, ocultas e de saída."
  },
  {
    question: `Durante o desenvolvimento de um modelo de IA, um estudante identifica que existe uma parte da rede responsável por fornecer o resultado final após todo o processamento.

Essa parte da rede é chamada de:`,
    options: [
      "Camada de saída",
      "Camada de hardware",
      "Camada de rede",
      "Camada de armazenamento"
    ],
    answer: 0,
    explanation: "A camada de saída apresenta o resultado final do modelo, como uma classe prevista ou um valor numérico."
  },
  {
    question: `Em uma rede neural, após o cálculo inicial de um neurônio, é necessário decidir se aquela informação deve seguir adiante ou não.

Essa decisão é feita por meio de:`,
    options: [
      "Banco de dados",
      "Função de ativação",
      "Sistema operacional",
      "Código-fonte"
    ],
    answer: 1,
    explanation: "A função de ativação define como a saída do neurônio será transformada e se ela seguirá para a próxima camada."
  },
  {
    question: `Um desenvolvedor está implementando uma rede neural e decide usar uma função simples e eficiente que retorna zero para valores negativos e mantém valores positivos.

Essa função é conhecida como:`,
    options: [
      "HTML",
      "ReLU",
      "Excel",
      "Windows"
    ],
    answer: 1,
    explanation: "A ReLU é muito usada em Deep Learning porque é simples, acelera o treinamento e reduz alguns problemas presentes em outras funções."
  },
  {
    question: `Uma equipe está criando um modelo de IA para prever notas de alunos com base em seu desempenho anterior. Para isso, o modelo precisa aprender a partir de exemplos.

Esse processo é chamado de:`,
    options: [
      "Instalação",
      "Treinamento",
      "Compilação",
      "Formatação"
    ],
    answer: 1,
    explanation: "Treinamento é a etapa em que o modelo ajusta seus parâmetros com base em dados para melhorar suas previsões."
  },
  {
    question: `Ao utilizar um modelo de IA, os dados que são fornecidos inicialmente para que ele processe e gere um resultado são chamados de:`,
    options: [
      "Output",
      "Input",
      "Erro",
      "Código"
    ],
    answer: 1,
    explanation: "Input é o dado de entrada. É a informação que o modelo recebe para processar antes de gerar uma saída."
  },
  {
    question: `Depois de processar os dados de entrada, um modelo de Deep Learning fornece um resultado, como uma previsão ou classificação.

Esse resultado é chamado de:`,
    options: [
      "Input",
      "Output",
      "Kernel",
      "Driver"
    ],
    answer: 1,
    explanation: "Output é a saída do modelo. Pode ser uma categoria, um número ou outra resposta prevista."
  },
  {
    question: `Um modelo de IA foi treinado com um conjunto de dados, mas apresenta ótimo desempenho apenas nesses dados e falha quando recebe novos exemplos.

Esse problema é conhecido como:`,
    options: [
      "Underfitting",
      "Overfitting",
      "Compilação",
      "Execução"
    ],
    answer: 1,
    explanation: "Overfitting acontece quando o modelo memoriza demais o conjunto de treino e perde capacidade de generalizar para novos dados."
  },
  {
    question: `Durante o treinamento de um modelo, um aluno percebe que o sistema percorre todo o conjunto de dados várias vezes para melhorar o aprendizado.

Cada passagem completa pelos dados é chamada de:`,
    options: [
      "Loop",
      "Epoch (época)",
      "Script",
      "Driver"
    ],
    answer: 1,
    explanation: "Uma época corresponde a uma passagem completa por todos os exemplos do conjunto de treinamento."
  },
  {
    question: `Um sistema de IA foi treinado com imagens de animais, onde cada imagem já possui um rótulo indicando qual animal aparece.

Esse tipo de aprendizado é chamado de:`,
    options: [
      "Não supervisionado",
      "Supervisionado",
      "Aleatório",
      "Manual"
    ],
    answer: 1,
    explanation: "No aprendizado supervisionado, o modelo aprende com exemplos que já têm a resposta correta."
  },
  {
    question: `Um desenvolvedor deseja criar modelos de Deep Learning utilizando uma biblioteca popular da linguagem Python, amplamente usada na indústria e na pesquisa.

Qual das opções abaixo representa essa ferramenta?`,
    options: [
      "Word",
      "TensorFlow",
      "Paint",
      "Bloco de Notas"
    ],
    answer: 1,
    explanation: "TensorFlow é uma biblioteca bastante usada para construir, treinar e implantar modelos de Deep Learning."
  },
  {
    question: `Uma professora explica que Machine Learning e Deep Learning estão relacionados, mas não são exatamente a mesma coisa. Ela destaca que um deles utiliza redes neurais com várias camadas.

Qual alternativa representa corretamente essa diferença?`,
    options: [
      "Deep Learning usa redes neurais com várias camadas",
      "Machine Learning não usa dados",
      "Deep Learning funciona sem treinamento",
      "Machine Learning não faz previsões"
    ],
    answer: 0,
    explanation: "Deep Learning é uma subárea do Machine Learning e se destaca pelo uso de redes neurais profundas, com múltiplas camadas ocultas."
  },
  {
    question: `Ao montar uma rede neural, um estudante observa que a primeira parte do modelo recebe as informações iniciais, como números, textos ou imagens.

Essa parte da rede corresponde à:`,
    options: [
      "Camada de entrada",
      "Camada de saída",
      "Camada final",
      "Camada de erro"
    ],
    answer: 0,
    explanation: "A camada de entrada recebe os dados brutos do problema e inicia o fluxo de processamento da rede neural."
  },
  {
    question: `Em uma rede neural, as camadas entre a entrada e a saída realizam transformações sucessivas nos dados para extrair padrões e características relevantes.

Essas camadas são chamadas de:`,
    options: [
      "Camadas ocultas",
      "Camadas físicas",
      "Camadas externas",
      "Camadas de armazenamento"
    ],
    answer: 0,
    explanation: "As camadas ocultas são responsáveis por processar os dados internamente e aprender representações úteis para o problema."
  },
  {
    question: `Em um neurônio artificial, cada entrada pode ter maior ou menor importância no cálculo final. Esse controle de importância é feito por um elemento específico.

Esse elemento é chamado de:`,
    options: [
      "Peso",
      "Pixel",
      "Driver",
      "Rótulo"
    ],
    answer: 0,
    explanation: "Os pesos indicam o quanto cada entrada influencia o resultado do neurônio. Durante o treinamento, esses valores são ajustados."
  },
  {
    question: `Além dos pesos, muitos neurônios artificiais usam um termo adicional que ajuda a deslocar o resultado do cálculo e melhorar a flexibilidade do modelo.

Esse termo é chamado de:`,
    options: [
      "Bias",
      "Frame",
      "Buffer",
      "Cache"
    ],
    answer: 0,
    explanation: "O bias ajuda a ajustar a saída do neurônio mesmo quando as entradas são zero, tornando o modelo mais flexível."
  },
  {
    question: `Durante o treinamento, o modelo compara o que previu com a resposta correta e mede o quanto errou. Essa medida é essencial para orientar os ajustes dos pesos.

Essa medida é conhecida como:`,
    options: [
      "Função de perda",
      "Camada de entrada",
      "Taxa de pixels",
      "Função de armazenamento"
    ],
    answer: 0,
    explanation: "A função de perda mede o erro do modelo. Quanto menor esse valor, melhor tende a ser o desempenho do modelo nas previsões."
  },
  {
    question: `Um grupo de alunos está treinando um modelo e percebe que, a cada ajuste dos pesos, ele tenta reduzir a diferença entre a previsão feita e a resposta esperada.

O principal objetivo desse ajuste é:`,
    options: [
      "Melhorar gradualmente o desempenho do modelo",
      "Trocar a linguagem de programação",
      "Diminuir o tamanho da tela",
      "Alterar o sistema operacional"
    ],
    answer: 0,
    explanation: "Ao ajustar os pesos, o modelo aprende com os erros e melhora gradualmente sua capacidade de prever corretamente."
  },
  {
    question: `Uma equipe quer criar um sistema que classifique imagens de gatos e cachorros. Para isso, usa um conjunto de imagens já identificadas com a classe correta.

Nesse caso, o conjunto de dados precisa conter:`,
    options: [
      "Imagens com rótulos corretos",
      "Somente imagens borradas",
      "Apenas arquivos de áudio",
      "Dados sem qualquer identificação"
    ],
    answer: 0,
    explanation: "Para classificação supervisionada, o modelo precisa aprender com exemplos rotulados, como 'gato' e 'cachorro'."
  },
  {
    question: `Um filtro automático de e-mails precisa decidir se cada mensagem recebida é spam ou não spam.

Esse tipo de problema é um exemplo de:`,
    options: [
      "Classificação",
      "Regressão",
      "Armazenamento",
      "Compressão"
    ],
    answer: 0,
    explanation: "Classificação é usada quando o objetivo é escolher entre categorias, como spam ou não spam."
  },
  {
    question: `Uma imobiliária quer usar IA para prever o valor de venda de imóveis com base em metragem, localização e número de quartos.

Esse problema é um exemplo de:`,
    options: [
      "Regressão",
      "Classificação",
      "Ranqueamento visual",
      "Detecção binária"
    ],
    answer: 0,
    explanation: "Regressão é adequada quando a saída esperada é um valor numérico contínuo, como o preço de uma casa."
  },
  {
    question: `Em muitos projetos de Deep Learning, os modelos costumam ter melhor desempenho quando treinados com uma quantidade maior de exemplos variados.

Isso acontece porque grandes volumes de dados:`,
    options: [
      "Ajudam o modelo a aprender padrões complexos",
      "Eliminam a necessidade de treinamento",
      "Substituem as funções de ativação",
      "Diminuem automaticamente o erro a zero"
    ],
    answer: 0,
    explanation: "Mais dados ajudam o modelo a encontrar padrões mais robustos e reduzem o risco de aprender apenas casos muito específicos."
  },
  {
    question: `Depois de treinar um modelo, uma equipe decide avaliá-lo com dados que ele nunca viu antes.

O objetivo principal desse teste é verificar:`,
    options: [
      "Se o modelo consegue generalizar",
      "Se a tela está funcionando",
      "Se o computador reinicia corretamente",
      "Se os arquivos foram apagados"
    ],
    answer: 0,
    explanation: "Testar com dados novos permite medir a generalização, isto é, a capacidade do modelo de funcionar bem fora do conjunto de treino."
  },
  {
    question: `Um modelo muito simples foi treinado, mas continua errando bastante tanto nos dados de treino quanto nos de teste. Isso indica que ele ainda não aprendeu os padrões necessários.

Esse problema é chamado de:`,
    options: [
      "Underfitting",
      "Overfitting",
      "Streaming",
      "Renderização"
    ],
    answer: 0,
    explanation: "Underfitting acontece quando o modelo não aprende o suficiente, geralmente por ser simples demais ou por ter sido pouco treinado."
  },
  {
    question: `Uma estudante percebe que algumas redes neurais são chamadas de profundas porque têm mais etapas internas de processamento.

O termo 'profunda' se refere principalmente ao fato de a rede possuir:`,
    options: [
      "Várias camadas ocultas",
      "Mais cabos conectados",
      "Arquivos muito grandes",
      "Uma tela de alta resolução"
    ],
    answer: 0,
    explanation: "Redes neurais profundas possuem várias camadas ocultas entre a entrada e a saída, permitindo aprender padrões mais complexos."
  },
  {
    question: `Ao final do treinamento, o modelo já ajustou seus parâmetros com base nos exemplos fornecidos.

Nesse momento, ele pode ser utilizado para:`,
    options: [
      "Fazer previsões em novos dados",
      "Substituir o processador",
      "Editar automaticamente o código-fonte",
      "Instalar bibliotecas sem internet"
    ],
    answer: 0,
    explanation: "Depois de treinado, o modelo entra em fase de uso, também chamada de inferência, quando faz previsões em dados novos."
  },
  {
    question: `Em um projeto educacional, um sistema analisa respostas de alunos e tenta identificar padrões para prever dificuldades futuras.

O principal objetivo de um modelo de Deep Learning nesse contexto é:`,
    options: [
      "Aprender padrões a partir dos dados",
      "Desenhar gráficos automaticamente",
      "Trocar o sistema operacional da escola",
      "Eliminar a necessidade de avaliação"
    ],
    answer: 0,
    explanation: "O objetivo central é aprender padrões presentes nos dados para apoiar previsões, classificações ou recomendações."
  },
  {
    question: `Ao explicar o funcionamento de um neurônio artificial, um professor afirma que ele recebe entradas, realiza um cálculo matemático e produz uma saída.

Essa descrição mostra que o neurônio artificial é:`,
    options: [
      "Um elemento que processa informações e gera uma resposta",
      "Um tipo de antivírus",
      "Uma pasta do sistema",
      "Uma conexão de internet"
    ],
    answer: 0,
    explanation: "O neurônio artificial combina entradas com pesos e bias, aplica uma função de ativação e gera uma saída para a próxima etapa."
  },
  {
    question: `Em um quiz de revisão, o aluno recebe uma explicação logo após responder cada item. Esse recurso ajuda especialmente porque:`,
    options: [
      "Permite compreender o erro e reforçar a aprendizagem",
      "Substitui completamente a aula",
      "Reduz o número de perguntas",
      "Remove a necessidade de estudo"
    ],
    answer: 0,
    explanation: "O feedback imediato ajuda o aluno a entender por que acertou ou errou, tornando a revisão mais significativa."
  },
  {
    question: `Em um laboratório, os alunos observam que um modelo foi excelente no conjunto de treino, mas apresentou resultados ruins em dados novos. A professora explica que isso indica falta de generalização.

Nesse caso, a principal preocupação é:`,
    options: [
      "O modelo memorizou demais os dados de treino",
      "O teclado está com defeito",
      "A função de ativação desapareceu",
      "O conjunto de teste não existe"
    ],
    answer: 0,
    explanation: "Quando um modelo aprende demais os exemplos de treino e falha em dados novos, isso indica memorização excessiva, típica de overfitting."
  },
  {
    question: `Uma professora apresenta diferentes aplicações de IA e pergunta em quais áreas o Deep Learning pode ser usado com destaque.

Qual alternativa está correta?`,
    options: [
      "Visão computacional, voz e texto",
      "Somente planilhas eletrônicas",
      "Apenas jogos offline",
      "Exclusivamente edição de imagens manual"
    ],
    answer: 0,
    explanation: "Deep Learning é muito utilizado em visão computacional, reconhecimento de fala, processamento de linguagem natural e várias outras áreas."
  },
  {
    question: `Um pesquisador quer saber se um sistema consegue identificar corretamente objetos em fotos mesmo quando nunca viu aquelas imagens antes.

Esse teste busca analisar principalmente:`,
    options: [
      "A capacidade de generalização do modelo",
      "A cor da interface do programa",
      "O tamanho físico do computador",
      "A velocidade do teclado"
    ],
    answer: 0,
    explanation: "Avaliar com exemplos inéditos mostra se o modelo aprendeu padrões úteis ou apenas decorou os dados usados no treinamento."
  },
  {
    question: `Durante a criação de uma rede neural, um aluno percebe que o modelo não aprende nada útil porque foi treinado por poucas épocas e com estrutura muito limitada.

Esse cenário indica:`,
    options: [
      "Underfitting",
      "Overfitting",
      "Balanceamento perfeito",
      "Generalização total"
    ],
    answer: 0,
    explanation: "Poucas épocas ou um modelo simples demais podem fazer com que a rede não aprenda os padrões básicos, caracterizando underfitting."
  },
  {
    question: `Em um projeto de reconhecimento de voz, o sistema recebe um áudio como entrada e devolve o texto reconhecido. Nesse processo, o áudio corresponde ao input e o texto corresponde ao output.

Essa afirmação está:`,
    options: [
      "Correta, porque input é entrada e output é saída",
      "Errada, porque áudio não pode ser entrada",
      "Errada, porque output sempre é imagem",
      "Correta apenas se não houver treinamento"
    ],
    answer: 0,
    explanation: "Input é qualquer dado fornecido ao modelo, como áudio, imagem ou texto. Output é o resultado gerado após o processamento."
  },
  {
    question: `Uma equipe percebe que certos atributos de entrada influenciam mais do que outros na decisão tomada por um neurônio artificial.

Isso ocorre porque:`,
    options: [
      "Cada entrada possui um peso associado",
      "Todas as entradas são sempre idênticas",
      "A rede ignora completamente as entradas",
      "O output é definido antes do cálculo"
    ],
    answer: 0,
    explanation: "Os pesos controlam a importância relativa de cada entrada no cálculo do neurônio."
  },
  {
    question: `Em um sistema de classificação de imagens, a camada final precisa indicar a categoria mais provável para cada imagem analisada.

Por isso, a camada de saída é importante porque:`,
    options: [
      "Entrega o resultado final do processamento",
      "Cria os dados de treinamento",
      "Substitui a camada de entrada",
      "Elimina a função de perda"
    ],
    answer: 0,
    explanation: "A camada de saída reúne o resultado do processamento e o apresenta no formato esperado pelo problema, como classes ou valores."
  },
  {
    question: `Durante uma revisão, um aluno pergunta por que não basta apenas decorar definições para aprender Deep Learning. A professora responde que é importante entender aplicações e situações práticas.

Essa orientação faz sentido porque:`,
    options: [
      "Os conceitos precisam ser aplicados em contextos reais",
      "Deep Learning não usa teoria",
      "Apenas memorizar é sempre suficiente",
      "As redes neurais dispensam interpretação"
    ],
    answer: 0,
    explanation: "Entender contextos de uso ajuda o aluno a relacionar conceitos abstratos com problemas reais, fortalecendo a aprendizagem."
  },
  {
    question: `Ao revisar o conteúdo, um estudante percebe que Deep Learning faz parte de uma área maior da inteligência artificial voltada para aprender com dados.

Essa área maior é chamada de:`,
    options: [
      "Machine Learning",
      "Hardware Learning",
      "Cloud Design",
      "Interface Neural Física"
    ],
    answer: 0,
    explanation: "Deep Learning é uma subárea do Machine Learning, que por sua vez está dentro do campo mais amplo da inteligência artificial."
  }
];