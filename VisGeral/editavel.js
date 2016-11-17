//DISPERÇÃO - JS
// window.innerWidth ===>> tamanho horizontal
// window.innerHeight ===>>> tamanho vertical
//tamanho do gráfico


var fatorEscalaX = window.innerWidth/1536;
var fatorEscalaY = window.innerHeight / 755;

var tamanhox = fatorEscalaX*1040;
var tamanhoy = fatorEscalaY*503.3;

//posição do gráfico
var scatterplotX = fatorEscalaX * 400;
var scatterplotY = fatorEscalaY * 60;



//menu com legendas
var menuX = 30;
var menuY = 65;

//retângulo de seleção
var menuBoxWidth = 222;
var menuBoxHeigth = 22;
var menuBoxX = 30;
var menuBoxY = 14;

var espacoEntreMenus = 25;

//posição dos ícones da legenda
var figuresX = 230;
var figuresY = 21;


//posicao das escalas
var positionXAxisX = tamanhox/2;
var positionXAxisY = tamanhoy*1.1;

//Atencao com esse posicionamento, ele esta rotacionado
var positionYAxisX = -15;
var positionYAxisY = -15;



var textinhoX = menuX + 40; //mude na variável menuX para ficar alinhado
var textinhoY = 50;
