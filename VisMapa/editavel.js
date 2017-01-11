var fatorEscalaX = window.innerWidth/1536;

//raio circulo circunscrito ao hexagono
var raio = 30;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var dx = raio * 1.85;
var dy = raio * 2.25;
var espessuraContorno = 7;

//range de cores dos exagonos
/*var corMinima = "rgb(230,255,255)";
var corDoMeio = "rgb(23,233,255)";
var corMaxima = "rgb(05,00,49)";
*/

var corMinima = {Matematica:"#ffc2c5",
                Linguagens:"#d4d7c4",
                Humanas:"#f3f1bf", 
                Natureza:"#cfe8d3",
                Redacao:"#e3cde2",
                Geral: "#000"};

var corDoMeio = {Matematica:"#e36c71",
                Linguagens:"#8a93b4",
                Humanas:"#979669", 
                Natureza:"#76a37a",
                Redacao:"#d8bdd7",
                Geral: "#000"};

var corMaxima = {Matematica:"#3c1414",
                Linguagens:"#0e1016",
                Humanas:"#1c1a0b", 
                Natureza:"#0b170c",
                Redacao:"#1d111c",
                Geral: "#000"};


//posicao do mapa

var mapX = fatorEscalaX * 100;
var mapY = 3;

//gradiente
var gradientX = fatorEscalaX *800;
var gradientY = 90;

var gradientWidth = 390;
var gradientHeight = 10;

var gradient2X = gradientX + gradientWidth/2;
var gradient2Y = gradientY;



var gradientText1X = gradientX - 10;
var gradientText1Y = gradientY;

var gradientText2X = gradientX + gradientWidth + 12;
var gradientText2Y = gradientY;


//menu com legendas
var menuX = 0;//30;
var menuY = 0;//65;


var espacoEntreMenus = 25;


//posicao do nome da visualizacao
var nameTextX = fatorEscalaX * 800;
var nameTextY = 70;

//posicao do nome da visualizacao
var cartogramaTextX = nameTextX +2;
var cartogramaTextY = nameTextY - 25;


//Para auxiliares:
//raio circulo circunscrito ao hexagono
var raioAux = 7;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var AuxDx = raioAux * 1.85;
var AuxDy = raioAux * 2.25;
var espessuraContornoAux = 1;


var tamanhoAuxX = 16 * raioAux;
var tamanhoAuxY = 16 * raioAux;
var auxiliarShiftX = 5;


var pAuxX = 800// posição X comum entre os auxiliares
var pAuxY = 130// posição Y comum entre os auxiliares
var posicaoAux =[//{x: fatorEscalaX * 315 , y:-80}, //geral
         {x:fatorEscalaX * pAuxX, 			            y:pAuxY},
         {x:fatorEscalaX * pAuxX + tamanhoAuxX + 25, 	y:pAuxY}, 				//linguagens
         {x:fatorEscalaX * pAuxX, 			            y:pAuxY + tamanhoAuxY + 25},		//humanas				//Natureza
         {x:fatorEscalaX * pAuxX + tamanhoAuxX + 25, 	y:pAuxY + tamanhoAuxY + 25},		//redação
         {x:fatorEscalaX * pAuxX + tamanhoAuxX * 2 +50,	y:pAuxY },  //matemática
         {x:fatorEscalaX * pAuxX + tamanhoAuxX * 2 +50,	y:pAuxY + tamanhoAuxY + 25}];	//geral
//var tradutor = {Linguagens: 1, Humanas: 2, Natureza: 3, Redacao: 4, Matematica: 5};

var textoVector = ["A cor de cada estado varia de",
                    "acordo com a nota média. Quanto",
                    "mais escuro, maior a média de",
                    "um estado em relação a uma",
                    "disciplina."];

var textinhoX = menuX + 40; //altere em "var menuX" para ficar alinhado
var textinhoY = 560;


//retângulo de seleção
var menuBoxWidth = tamanhoAuxX;
var menuBoxHeigth = tamanhoAuxY;
var menuBoxX = posicaoAux[0].x;
var menuBoxY = posicaoAux[0].y;
