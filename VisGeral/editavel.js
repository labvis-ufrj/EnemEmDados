//DISPERÇÃO - JS
// window.innerWidth ===>> tamanho horizontal
// window.innerHeight ===>>> tamanho vertical
//tamanho do gráfico


var fatorEscalaX = window.innerWidth/1536;
var fatorEscalaY = window.innerHeight / 755;

var tamanhox = fatorEscalaX*1075.2;
var tamanhoy = fatorEscalaY*503.3;

//posição do gráfico
var scatterplotX = fatorEscalaX * 400;
var scatterplotY = fatorEscalaY * 60;



//menu com legendas
var menuX = 30;
var menuY = 40;

//retângulo de seleção
var menuBoxWidth = 200;
var menuBoxHeigth = 20;
var menuBoxX = 15;
var menuBoxY = 15;

var espacoEntreMenus = 25;

//posição dos ícones da legenda
var figuresX = 180;
var figuresY = 20;


//posicao das escalas
var positionXAxisX = tamanhox/2;
var positionXAxisY = tamanhoy*1.1;

//Atencao com esse posicionamento, ele esta rotacionado
var positionYAxisX = -tamanhoy/2;
var positionYAxisY = -50;



var textinhoX = menuX + 40; //mude na variável menuX para ficar alinhado
var textinhoY = 50;
