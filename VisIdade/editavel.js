//BARRAS PARA IDADE - JS
//tamanhos do scatterplot


var fatorEscalaX = window.innerWidth/1536;
var fatorEscalaY = window.innerHeight / 755;

var tamanhox = fatorEscalaX * 900;
var tamanhoy = fatorEscalaY * 350;

var posicaoX = fatorEscalaX * 500;//fatorEscalaX * 380;
var posicaoY = fatorEscalaY * 215;



//menu
//var menuX = window.innerWidth*.045 ;
var menuX = 0;
var menuY = 100;

//var tamanhoMenuX =600;
//var tamanhoMenuY =250;

var separacaoMenuX = fatorEscalaX * 40
var separacaoMenuY =20;

var shiftMenuX = window.innerWidth*.045;
var shiftMenuY = 40;

var quantidadePorColuna = 6;

var posicaoMenuBrasilX = 70//menuX;
var posicaoMenuBrasilY = 280//menuY - 30;





//Sobre as visualizacoes auxiliares
//Referente ao grupo
var posicaoGroupAuxX = window.innerWidth/25;
var posicaoGroupAuxY = 75;

//referente a cada uma
var tamanhoAuxX = 100;
var tamanhoAuxY = 50;
var posicaoTextoAuxiliarY = -10 ;
var posicaoTextoAuxiliarX = 0 ;

var posicaoAux = [];


var tp = //
posicaoAux =[{x: fatorEscalaX * 315 , y:1}, //geral
			 {x: fatorEscalaX * 1039 , y:1}, //linguagens
			 {x:fatorEscalaX *677 , y:1},//humanas
			 {x:fatorEscalaX *496 , y:1},//Natureza
			 {x:fatorEscalaX *1220 , y:1},//redação
			 {x:fatorEscalaX *858 , y:1}];//matemática

/*
ordem final: 	geral
		natureza
		humanas
		matemática
		linguagens
		redação
*/

//idade
var positionXAxisX = 0;
var positionXAxisY = tamanhoy*1.15;


//Atencao com esse posicionamento, ele esta rotacionado
//var positionYAxisX = -tamanhoy/2;
//nº de pessoas
var positionYAxisX = -60;
var positionYAxisY = -20;
var saparacaoYAxis = 20;
//Medias
var positionZAxisX = tamanhox +20;
var positionZAxisY = -15;

//posicao do nome da visualizacao
var stateTextX = fatorEscalaX *700;
var stateTextY = 200;

var quantidadeTextX = stateTextX + 300;
var quantidadeTextY = stateTextY;


var gradesTextX = stateTextX + 460;
var gradesTextY = stateTextY;

var ageTextX = stateTextX + 190;
var ageTextY = stateTextY;

//cores dos graficos auxiliares
var cor = {geral:"#bbb",
		matematica:"#ff7b81",
            linguagens:"#7c86ab",
            humanas:"#f0de98", 
            natureza:"#95cb9a",
            redacao:"#92538f"};

var textinhoX = window.innerWidth*.045; //mude na variável menuX para ficar alinhado
var textinhoY = 365
var textinhoIndiceY = 75;

var textoVector = ["As barras mostram a quantidade",
                    "de pessoas por faixa etária que",
                    "fizeram a prova, com número",
                    "de pessoas à esquerda.",
                    "A primeira barra são os menores",
                    "de 15 anos (-15), e a última representa",
                    "os maiores de 50 anos (+50).",
                    " ",
                    "A linha representa a média de",
                    "cada faixa etária, com eixo à direita."
                    ];
//Para auxiliares:
//raio circulo circunscrito ao hexagono
var raioAux = 13;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var AuxDx = raioAux * 1.85;
var AuxDy = raioAux * 2.25;
var espessuraContornoAux = 1;

var mapX = 55;
var mapY = 90;

var gridWidth = 3;

var brasil = [{x:1.5, y:5, estado:"Brasil"}];