//BARRAS PARA IDADE - JS
//tamanhos do scatterplot
var tamanhox = 1000;
var tamanhoy = 450;

var posicaoX = 380;
var posicaoY = 150;



//menu
var menuX =50;
var menuY =120;

//var tamanhoMenuX =600;
//var tamanhoMenuY =250;

var separacaoMenuX =50;
var separacaoMenuY =30;

var shiftMenuX = 30;
var shiftMenuY = 30;

var quantidadePorColuna = 6;

var posicaoMenuBrasilX = 38//menuX;
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
posicaoAux =[{x:315 , y:-80}, //geral
			 {x:1039 , y:-80}, //linguagens
			 {x:677 , y:-80},//humanas
			 {x:496 , y:-80},//Natureza
			 {x:1220 , y:-80},//redação
			 {x:858 , y:-80}];//matemática

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
var stateTextX = 875;
var stateTextY = 168;

//cores dos graficos auxiliares
var cor = {geral:"#c9b1b2",
		matematica:"#ff7b81",
            linguagens:"#7c86ab",
            humanas:"#f0efae", 
            natureza:"#95cb9a",
            redacao:"#92538f"};

var textinhoX = menuX + 20; //mude na variável menuX para ficar alinhado
var textinhoY = 50;
