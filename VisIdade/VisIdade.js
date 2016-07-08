
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisIdade(sub, dados){
	grafico = vis.selectAll(".layout")
			.data([0])
		   	.enter()
		    .append("g")
		    .attr("class", "layout")
			.attr("transform",function(d,i){return "translate(" + posicaoX + "," + posicaoY + ")";});

	grafico.data(dados)
		    .enter();


	var xAxis = d3.svg.axis()
	    .scale(ageScale)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(quantScale)
	    .orient("left");
	
	var zAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("right");

	grafico.append("g")
	      .attr("class", "x-axis")
	      .attr("transform", "translate(0," + tamanhoy + ")")
	      .call(xAxis);

	grafico.append("g")
	      .attr("class", "y-axis")
	      .call(yAxis);

	grafico.append("g")
	      .attr("class", "z-axis")
	      .attr("transform", "translate(" + tamanhox + ", 0)")
	      .call(zAxis);
	      //.style("fill","blue");
  	
  	grafico.selectAll(".dotQuant")
	      .data(dados)
	      .enter()
	      .append("rect")
	      .attr("class", "dotQuant")
	      //.attr("r", 3.5)
	      .attr("x", function(d) { return ageScale(Number(d.idade));}) //- (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade))/2); })
	      .attr("y", function(d) { 
	      	if (Number(d.quantidade) == 0){return 0;}
	      	return quantScale(Number(d.quantidade)); 
	      })
	      .attr("width", function(){ return ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade));})
	      .attr("height",function(d, i){ return tamanhoy - quantScale(Number(d.quantidade));});
	      //.style("fill", function(d) { return "brown"; });

	var lineFunction = d3.svg.line()
			.x(function(d){return ageScale(Number(d.idade)) + (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade)))/2; })
			.y(function(d){return gradeScale(Number(d[sub])); })
			.interpolate("linear");

	grafico.selectAll(".lineGrade")
			.data([1])
			.enter()
			.append("path")
			.attr("class","lineGrade")
            .attr("d", lineFunction(dados))
            .attr("fill", "none");

  	grafico.selectAll(".dotGrade")
	      .data(dados)
	      .enter()
	      .append("circle")
	      .attr("class", "dotGrade")
	      .attr("cx", function(d) { return ageScale(Number(d.idade)) + (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade)))/2; })
	      .attr("cy", function(d) { return gradeScale(Number(d[sub])); })
	      .attr("r", 3.5);
/*
	grafico.selectAll(".dotGrade")
	      .data(dados)
	      .enter()
	      .append("line")
	      .attr("class", "dotGrade")
	      //.attr("r", 3.5)
	      .attr("x1",function(d) { return ageScale(Number(d.idade)) -3; })
	      .attr("x2",function(d) { return ageScale(Number(d.idade)) +3; })
		  .attr("y1",function(d) { return gradeScale(Number(d[subject])); })
		  .attr("y2",function(d) { return gradeScale(Number(d[subject])); });	      //.attr("cx", function(d) { return ageScale(Number(d.idade)); })
	      //.attr("cy", function(d) { return gradeScale(Number(d[subject])); });
*/
}
function update(sub, num){



	var xAxis = d3.svg.axis()
	    .scale(ageScale)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(quantScale)
	    .orient("left");
	
	var zAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("right");


  	grafico.select(".x-axis")
  		  .transition()
  		  .duration(600)
  		  .call(xAxis);

  	grafico.select(".y-axis")
  		  .transition()
  		  .duration(600)
  		  .call(yAxis);

  	grafico.select(".z-axis")
  		  .transition()
  		  .duration(600)
  		  .call(zAxis);

	console.log("num =" + num);
  	visAuxiliares.selectAll(".selected")
  		.transition()
  		.attr("x", posicaoAux[num].x - tamanhoAuxX*0.1)
  		.attr("y", posicaoAux[num].y - tamanhoAuxY*0.2)
  		.duration(600);



  	grafico.selectAll(".dotGrade")
	      .transition()
	      .attr("cx", function(d, i) { return ageScale(Number(dataset[i].idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
	      .attr("cy", function(d, i) { return gradeScale(Number(dataset[i][sub])); })
	      .duration(600);


	var lineFunction = d3.svg.line()
			.x(function(d, i){return ageScale(Number(d.idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
			.y(function(d, i){return gradeScale(Number(d[sub])); })
			.interpolate("linear");

	grafico.selectAll(".lineGrade")
			.transition()
            .attr("d", lineFunction(dataset))
            .duration(600)
            .attr("fill", "none");        

  	grafico.selectAll(".dotQuant")
  		  .transition()
	      .attr("x", function(d, i) { return ageScale(Number(dataset[i].idade));}) //- (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade))/2); })
	      .attr("y", function(d, i) { 
	      	if (Number(d.quantidade) == 0){return 0;}
	      	return quantScale(Number(dataset[i].quantidade)); 
	      })
	      .attr("width", function(){ return ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade));})
	      .attr("height",function(d, i){ return tamanhoy - quantScale(Number(dataset[i].quantidade));})
	      .duration(600)
          .attr("fill", "none");




}
function makeMenu(subjeto){

	var prod = ["geral",	
        			"AC",	 
					"AL",	 
					"AM",	 
					"AP",	 
					"BA",	 
					"CE",	 
					"DF",	 
					"ES",	 
					"GO",	 
					"MA",	 
					"MG",	 
					"MS",	 
					"MT",	 
					"PA",	 
					"PB",	 
					"PE",	 
					"PI",	 
					"PR",	 
					"RJ",	 
					"RN",	 
					"RO",	 
					"RR",	 
					"RS",	 
					"SC",	 
					"SE",	 
					"SP",	 
					"TO"];


		var subjects = ["geral",
	                    "linguagens",
	                    "humanas", 
	                    "natureza",
	                    "redacao",
	                    "matematica"];
	

	manu = vis.selectAll(".manu")
				.data([0])
				.enter()
				.append("g")
				.attr("class", "manu");

	manu.selectAll(".manu-rect")
	  .data([0])
	  .enter()
      .append("rect")
      .attr("class", "manu-rect")
      //.attr("r", 3.5)
      .attr("x", function(d) { return 0;}) //- (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade))/2); })
      .attr("y", function(d) { return 0; })
      .attr("width", function(){ return tamanhoMenuX;})
      .attr("height",function(d, i){ return tamanhoMenuY;});

	manu.selectAll(".manu-text")
	  .data(prod)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return Math.floor(i/5)*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i%5)*separacaoMenuY + shiftMenuY;})
      .on("click", function(d,i){
      	if(d != estadoAtual){
      		estadoAtual = d;
	      	d3.csv("./estados/" + d + ".csv" ,function(data){
				dataset = data ;
				console.log("menu");
				console.log(dataset);

		
			     sub = maxQuant = 0;
					maxVal = minVal = Number(dataset[0][subjeto]);
				for (sub= 0; sub< subjects.length; sub++){
					for (indice = 0; indice < dataset.length ; indice++){
						if (Number(dataset[indice][subjects[sub]]) > maxVal){
							maxVal = Number(dataset[indice][subjects[sub]]);
						};
						if (Number(dataset[indice][subjects[sub]]) < minVal){
							minVal = Number(dataset[indice][subjects[sub]]);
						};
						if (Number(dataset[indice].quantidade) > maxQuant){
							maxQuant = Number(dataset[indice].quantidade);
						};
						if (Number(dataset[indice].quantidade) < minQuant){
							minQuant = Number(dataset[indice].quantidade);
						};
					};
				};
				 primeiraIdade = 0;
				while (1){
					console.log(dataset)
					if (dataset[primeiraIdade].quantidade != "0"){break}
					primeiraIdade++;
				};
				 ultimaIdade = dataset.length - 1;
				while (1){
					if (dataset[ultimaIdade].quantidade != "0"){break}
					ultimaIdade--;
				};

				 gradeScale2 = d3.scale.linear()
				    .domain([minVal*0.975, maxVal*1.025])
				    .range([tamanhoy, 0]);

				 ageScale2 = d3.scale.linear()
		    		.domain([Number(dataset[0].idade),Number(dataset[dataset.length-1].idade) + 1])
				    .range([0,tamanhox]);


				console.log(maxQuant)
				 quantScale2 = d3.scale.linear()
				    .domain([0, maxQuant*1.05])
				    .range([tamanhoy, 0]);


				 ageScale = ageScale2;
				 gradeScale = gradeScale2;
				 quantScale = quantScale2;

				var contador = 0;
				while (1){
					//contador++;
					if (subject != subjects[contador]){
						contador++;
					}
					if (subject == subjects[contador]){
						break;
					}
					
				};
				console.log(subject + " " + subjects[contador] );
				console.log(contador);
	    		//VisIdade(""+subject, dataset);
	    		update("" + subject, contador);
	    		for (var indice = 0; indice < subjects.length; indice++){
	    			console.log("indice = "+ indice);
	          		updateAuxiliar(indice, subjects[indice], dataset);
	      		};
    	
    		});

      	}
      });



	manu.attr("transform", "translate(" + menuX + "," + menuY + ")");

      manuImage.on("click", function(){
      	manu.remove();
      	manuImage.on("click", function(){ makeMenu()});
      });

};

function makeVisAuxiliar(num, sub, dados){

	taxaX = tamanhoAuxX/tamanhox;

	taxaY = tamanhoAuxY/tamanhoy;

			var gradeScale2 = d3.scale.linear()
			    .domain([minVal*0.975, maxVal*1.025])
			    .range([tamanhoy*taxaY, 0]);

			var ageScale2 = d3.scale.linear()
			    .domain([Number(dataset[0].idade),Number(dataset[dataset.length-1].idade) + 1])
			    .range([0,tamanhox*taxaX]);



			var quantScale2 = d3.scale.linear()
			    .domain([0, maxQuant*1.05])
			    .range([tamanhoy*taxaY, 0]);

/*
			 ageScale = ageScale2;
			 gradeScale = gradeScale2;
			 quantScale = quantScale2;
*/


	graficosAuxiliares = visAuxiliares.selectAll(".graficosAuxiliares" + num)
			.data([0])
		   	.enter()
		    .append("g")
		    .attr("class", "graficosAuxiliares"  + num)
			.attr("transform",function(d,i){return "translate(" + posicaoAux[num].x + "," + posicaoAux[num].y + ")";});

	graficosAuxiliares.data(dados)
		    .enter();

/*
	var xAxis = d3.svg.axis()
	    .scale(ageScale2)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(quantScale2)
	    .orient("left");
	
	var zAxis = d3.svg.axis()
	    .scale(gradeScale2)
	    .orient("right");

	graficosAuxiliares.append("g")
	      .attr("class", "x-axis-Aux")
	      .attr("transform", "translate(0," + tamanhoAuxY + ")")
	      .call(xAxis);

	graficosAuxiliares.append("g")
	      .attr("class", "y-axis-Aux")
	      .call(yAxis);

	graficosAuxiliares.append("g")
	      .attr("class", "z-axis-Aux")
	      .attr("transform", "translate(" +  tamanhoAuxX + ", 0)")
	      .call(zAxis);
	      //.style("fill","blue");
  */	
  	graficosAuxiliares.selectAll(".dotQuantAux")
	      .data(dados)
	      .enter()
	      .append("rect")
	      .attr("class", "dotQuantAux")
	      //.attr("r", 3.5)
	      .attr("x", function(d) { return ageScale2(Number(d.idade));}) //- (ageScale2(Number(dados[2].idade)) - ageScale2(Number(dados[1].idade))/2); })
	      .attr("y", function(d) { 
	      	if (Number(d.quantidade) == 0){return 0;}
	      	return quantScale2(Number(d.quantidade)); 
	      })
	      .attr("width", function(){ return ageScale2(Number(dados[2].idade)) - ageScale2(Number(dados[1].idade));})
	      .attr("height",function(d, i){ return tamanhoy*taxaY - quantScale2(Number(d.quantidade));});
	      //.style("fill", function(d) { return "brown"; });

	var lineFunction = d3.svg.line()
			.x(function(d){return ageScale2(Number(d.idade)) + (ageScale2(Number(dados[2].idade)) - ageScale2(Number(dados[1].idade)))/2; })
			.y(function(d){return gradeScale2(Number(d[sub])); })
			.interpolate("linear");

	graficosAuxiliares.selectAll(".lineGradeAux")
			.data([1])
			.enter()
			.append("path")
			.attr("class","lineGradeAux")
            .attr("d", lineFunction(dados))
            .attr("fill", "none");

  	graficosAuxiliares.selectAll(".dotGradeAux")
	      .data(dados)
	      .enter()
	      .append("circle")
	      .attr("class", "dotGradeAux")
	      .attr("cx", function(d) { return ageScale2(Number(d.idade)) + (ageScale2(Number(dados[2].idade)) - ageScale2(Number(dados[1].idade)))/2; })
	      .attr("cy", function(d) { return gradeScale2(Number(d[sub])); })
	      .attr("r", 1);

	graficosAuxiliares.selectAll(".subjects")
		.data([1])
		.enter()
		.append("text")
		.text( function (d) { return "" + upcase[sub]; })
        .attr("x", function(d, i) { return tamanhoAuxX/2; })
        .attr("y", function(d, i){ return 0;})
        .attr("class", "subjects")
        .on("click", function(){
        	update(""+sub, num)
        	subject = sub;});

	graficosAuxiliares.selectAll(".clickRect")
			.data([1])
			.enter()
			.append("rect")
			.attr("class", "clickRect")
			.attr("width", function(){ return tamanhoAuxX;})
	      	.attr("height",function(){ return tamanhoAuxY;})
	      	.on("click", function(){
	      		update(""+sub, num)
	      		subject = sub;});
	      


};

function updateAuxiliar(num, sub, dados){


	taxaX = tamanhoAuxX/tamanhox;

	taxaY = tamanhoAuxY/tamanhoy;

	var subjects = ["geral",
                    "linguagens",
                    "humanas", 
                    "natureza",
                    "redacao",
                    "matematica"];


     indiceSub = maxQuant = 0;
	maxVal = minVal = Number(dados[0][sub]);
	for (indiceSub= 0; indiceSub< subjects.length; indiceSub++){
		for (indice = 0; indice < dados.length ; indice++){
			if (Number(dados[indice][subjects[indiceSub]]) > maxVal){
				maxVal = Number(dados[indice][subjects[indiceSub]]);
			};
			if (Number(dados[indice][subjects[indiceSub]]) < minVal){
				minVal = Number(dados[indice][subjects[indiceSub]]);
			};
			if (Number(dados[indice].quantidade) > maxQuant){
				maxQuant = Number(dados[indice].quantidade);
			};
			if (Number(dados[indice].quantidade) < minQuant){
				minQuant = Number(dados[indice].quantidade);
			};
		};
	};
	 primeiraIdade = 0;
	while (1){
		if (dados[primeiraIdade].quantidade != "0"){break}
		primeiraIdade++;
	};
	 ultimaIdade = dados.length - 1;
	while (1){
		if (dados[ultimaIdade].quantidade != "0"){break}
		ultimaIdade--;
	};

			var gradeScale2 = d3.scale.linear()
			    .domain([minVal*0.975, maxVal*1.025])
			    .range([tamanhoy*taxaY, 0]);

			var ageScale2 = d3.scale.linear()
			    .domain([Number(dados[0].idade),Number(dados[dados.length-1].idade) + 1])
			    .range([0,tamanhox*taxaX]);



			var quantScale2 = d3.scale.linear()
			    .domain([0, maxQuant*1.05])
			    .range([tamanhoy*taxaY, 0]);

/*
			 ageScale = ageScale2;
			 gradeScale = gradeScale2;
			 quantScale = quantScale2;
*/

	graficosAuxiliares = visAuxiliares.selectAll(".graficosAuxiliares" + num);

  	graficosAuxiliares.selectAll(".dotQuantAux")
	      .transition()
	      .attr("y", function(d, i) { 
	      	if (Number(dados[i].quantidade) == 0){return 0;}
	      	return quantScale2(Number(dados[i].quantidade)); 
	      })
	      .attr("height",function(d, i){ return tamanhoy*taxaY - quantScale2(Number(dados[i].quantidade));})
	      .duration(600);

	var lineFunction = d3.svg.line()
			.x(function(d, i){return ageScale2(Number(dados[i].idade)) + (ageScale2(Number(dados[2].idade)) - ageScale2(Number(dados[1].idade)))/2; })
			.y(function(d, i){return gradeScale2(Number(dados[i][sub])); })
			.interpolate("linear");

	graficosAuxiliares.selectAll(".lineGradeAux")
			.transition()
            .attr("d", lineFunction(dados))
            .duration(600)
            .attr("fill", "none");

  	graficosAuxiliares.selectAll(".dotGradeAux")
  		  .transition()
	      .attr("cy", function(d, i) { return gradeScale2(Number(dados[i][sub])); })
	      .duration(600)



/*
	graficosAuxiliares.selectAll(".subs")
		.data([1])
		.enter()
		.append("text")
		.text( function (d) { return "" + sub; })
        .attr("x", function(d, i) { return tamanhoAuxX/2; })
        .attr("y", function(d, i){ return 0;})
        .attr("class", "subs")
        .on("click", function(){update(""+sub, num)});

	graficosAuxiliares.selectAll(".clickRect")
			.data([1])
			.enter()
			.append("rect")
			.attr("class", "clickRect")
			.attr("width", function(){ return tamanhoAuxX;})
	      	.attr("height",function(){ return tamanhoAuxY;})
	      	.on("click", function(){update(""+sub, num)});
	      
*/

}