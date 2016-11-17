var fatorEscalaX = window.innerWidth/1536;

//raio circulo circunscrito ao hexagono
var raio = 35;
//separacoes verticais e horizontais entre os hexagonos
//calculadas em funcao do raio
var dx = raio * 1.85;
var dy = raio * 2.25;
var espessuraContorno = 5;

//range de cores dos exagonos
/*var corMinima = "rgb(230,255,255)";
var corDoMeio = "rgb(23,233,255)";
var corMaxima = "rgb(05,00,49)";
*/

var corMinima = {Matematica:"#ffc2c5",
                Linguagens:"#d4d7c4",
                Humanas:"#f3f1bf", 
                Natureza:"#cfe8d3",
                Redacao:"#e3cde2"};

var corDoMeio = {Matematica:"#e36c71",
                Linguagens:"#8a93b4",
                Humanas:"#979669", 
                Natureza:"#76a37a",
                Redacao:"#d8bdd7"};

var corMaxima = {Matematica:"#3c1414",
                Linguagens:"#0e1016",
                Humanas:"#1c1a0b", 
                Natureza:"#0b170c",
                Redacao:"#1d111c"};


//posicao do mapa

var mapX = fatorEscalaX * 450;
var mapY = 03;

var gradientX = 60 + mapX;
var gradientY = raio * 16 + 10*mapY;

var gradientWidth = 450;
var gradientHeight = 20;

var gradient2X = gradientX + gradientWidth/2;
var gradient2Y = gradientY;



var gradientText1X = gradientX - 10;
var gradientText1Y = gradientY;

var gradientText2X = gradientX + gradientWidth + 12;
var gradientText2Y = gradientY;


//menu com legendas
var menuX = 30;
var menuY = 65;


//retângulo de seleção
var menuBoxWidth = 125;
var menuBoxHeigth = 20;
var menuBoxX = 25;
var menuBoxY = 15;

var espacoEntreMenus = 25;


//posicao do nome da visualizacao
var nameTextX = fatorEscalaX * 450;
var nameTextY = 350;

//posicao do nome da visualizacao
var cartogramaTextX = nameTextX +2;
var cartogramaTextY = nameTextY - 25;


var textinhoX = menuX + 40; //altere em "var menuX" para ficar alinhado
var textinhoY = 50;
