//BARRAS PARA IDADE - JS
//tamanhos do scatterplot


var fatorEscalaX = window.innerWidth/1536;
var fatorEscalaY = window.innerHeight / 755;

var tamanhox = fatorEscalaX * 1000;
var tamanhoy = fatorEscalaY * 450;

var posicaoX = fatorEscalaX * 390;//fatorEscalaX * 380;
var posicaoY = fatorEscalaY * 150;



//menu
//var menuX = window.innerWidth*.045 ;
var menuX = 0;
var menuY = 90;

//var tamanhoMenuX =600;
//var tamanhoMenuY =250;

var separacaoMenuX = fatorEscalaX * 50;
var separacaoMenuY =30;

var shiftMenuX = window.innerWidth*.045;
var shiftMenuY = 30;

var quantidadePorColuna = 6;

var posicaoMenuBrasilX = window.innerWidth*.045//menuX;
var posicaoMenuBrasilY = 0//menuY - 30;





//Sobre as visualizacoes auxiliares
//Referente ao grupo
var posicaoGroupAuxX = window.innerWidth/25;
var posicaoGroupAuxY = 130;

//referente a cada uma
var tamanhoAuxX = 100;
var tamanhoAuxY = 50;
var posicaoTextoAuxiliarY = -10 ;
var posicaoTextoAuxiliarX = 0 ;

var posicaoAux = [];

var tp = //
posicaoAux =[{x: fatorEscalaX * 315 , y:-80}, //geral
			 {x: fatorEscalaX * 1039 , y:-80}, //linguagens
			 {x:fatorEscalaX *677 , y:-80},//humanas
			 {x:fatorEscalaX *496 , y:-80},//Natureza
			 {x:fatorEscalaX *1220 , y:-80},//redação
			 {x:fatorEscalaX *858 , y:-80}];//matemática

/*
ordem final: 	geral
		natureza
		humanas
		matemática
		linguagens
		redação
*/

//posicao das escalas
var positionXAxisX = 0;
var positionXAxisY = tamanhoy*1.07;

//Atencao com esse posicionamento, ele esta rotacionado
//var positionYAxisX = -tamanhoy/2;
var positionYAxisX = 0;
var positionYAxisY = -5;


var positionZAxisX = tamanhox;
var positionZAxisY = -5;

//posicao do nome da visualizacao
var stateTextX = fatorEscalaX *875;
var stateTextY = 168;

//cores dos graficos auxiliares
var cor = {geral:"#c9b1b2",
		matematica:"#ff7b81",
            linguagens:"#7c86ab",
            humanas:"#f0efae", 
            natureza:"#95cb9a",
            redacao:"#92538f"};

var textinhoX = window.innerWidth*.045; //mude na variável menuX para ficar alinhado
var textinhoY = 50;
