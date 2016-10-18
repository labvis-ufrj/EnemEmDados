
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisIdade(sub, dados){
console.log("entrou");

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
	    .orient("bottom")
	    .tickFormat(function(d) { 
	    	if (Number(d) == "15"){
	    		return "- " + d + "";
			}
	    	if (Number(d) == "50"){
	    		return "+ " + d + "";
			}
			return "" + d;
		});

	var yAxis = d3.svg.axis()
	    .scale(quantScale)
	    .orient("left")
	    .tickFormat(function(d) { return d + " -"; });
	
	var zAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("right");

	grafico.append("g")
	      .attr("class", "x-axis")
	      .attr("transform", "translate(0," + tamanhoy + ")")
	      .call(xAxis);
	grafico.selectAll(".x-axis .domain").remove();
	grafico.selectAll(".x-axis text")
		.attr("transform", "translate( " + (ageScale(Number(dados[2].idade)) - ageScale(Number(dados[1].idade)))/2 + ",0)");

	grafico.selectAll(".x-axis-text")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "x-axis-text")
	        .attr("x", positionXAxisX )
	        .attr("y", positionXAxisY )
	        .style("text-anchor", "left")
	        .text("Idade");


	grafico.append("g")
	      .attr("class", "y-axis")
	      .call(yAxis);

	grafico.selectAll(".y-axis .domain").remove();
/*
  	grafico.selectAll(".domain-2")
		.data([1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
		.enter()
		.append("line")
		.attr("x1", -6 )     // x position of the first end of the line
		.attr("y1", function(d, i){return i*tamanhoy/10.45 +18;})      // y position of the first end of the line
		.attr("x2", -1 )     // x position of the second end of the line
		.attr("y2", function(d, i){return i*tamanhoy/10.45 +18;})
		.attr("class", "domain-2");
*/

	grafico.selectAll(".y-axis-text")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "y-axis-text")
	        //.attr("transform", "rotate(-90)")
	        .attr("x", positionYAxisX )
	        .attr("y", positionYAxisY )
	        //.style("text-anchor", "middle")
	        .text("Quantidade")
	        .style("fill",cor[sub]);
/*
	grafico.selectAll(".y-axis .tick text")
			.style("font-weight", function(d, i){if (i == (grafico.selectAll(".y-axis .tick text")[0].length-1)){return "bold";}return "normal";});
*/


	grafico.append("g")
	      .attr("class", "z-axis")
	      .attr("transform", "translate(" + tamanhox + ", 0)")
	      .call(zAxis);
	      //.style("fill",cor[sub]);

		grafico.selectAll(".z-axis-text")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "z-axis-text")
	        //.attr("transform", "rotate(-90)")
	        .attr("x", positionZAxisX )
	        .attr("y", positionZAxisY )
	        //.style("text-anchor", "middle")
	        .text("Médias")
	        //.style("fill", cor[sub]);
  	
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
	      .attr("height",function(d, i){ return tamanhoy - quantScale(Number(d.quantidade));})
	      .style("fill", function(d) { return cor[sub]; });

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
            //.style("stroke","black");//cor[sub]);

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
  	manu.selectAll(".manu-text")
  		.style("fill",function(d, i){if (i == 0){return "orange";}return;});

	vis.selectAll(".stateText")
		.data([0])
		.enter()
		.append("text")      // text label for the x axis
        .attr("class", "stateText")
        //.attr("transform", "rotate(-90)")
        .attr("x", stateTextX )
        .attr("y", stateTextY )
        //.style("text-anchor", "middle")
        .text(function(){return "" + nomeDoEstado[estadoAtual];});	

}
function update(sub, num){



	var xAxis = d3.svg.axis()
	    .scale(ageScale)
	    .orient("bottom")
	    .tickFormat(function(d) { 
	    	if (Number(d) == "15"){
	    		return "- " + d + "";
			}
	    	if (Number(d) == "50"){
	    		return "+ " + d + "";
			}
			return "" + d;
		});
	
	var yAxis = d3.svg.axis()
	    .scale(quantScale)
	    .orient("left")
		.tickFormat(function(d) { return d + " -"; });

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
	grafico.selectAll(".x-axis .domain").remove();
	grafico.selectAll(".y-axis .domain").remove();

	grafico.selectAll(".y-axis-text")
		.transition()
  		.style("fill",cor[sub])
  		.duration(600)

 /* 	grafico.selectAll(".domain-2")
  		.style("visibility", "hidden")
  		.transition()
  		.delay(600)
  		.style("visibility", "visible");
*/



/*
	grafico.selectAll(".y-axis .tick text")
			.transition()
			.delay(600)
			.style("font-weight", function(d, i){
				if (i == (grafico.selectAll(".y-axis .tick text")[0].length-1)){return "bold";}return "normal";})
			.duration(0);
*/
  	grafico.select(".z-axis")
  		  .transition()
  		  .duration(600)
  		  .call(zAxis);

	grafico.selectAll(".y-axis")
		.transition()
		.style("fill",cor[sub])
		.duration(600);

	console.log("num =" + num);
  	visAuxiliares.selectAll(".selected")
  		.transition()
  		.attr("x", posicaoAux[num].x - tamanhoAuxX*0.1)
  		.attr("y", posicaoAux[num].y - tamanhoAuxY*0.1)
  		.duration(600);



  	grafico.selectAll(".dotGrade")
	      .transition()
	      .attr("cx", function(d, i) { return ageScale(Number(dataset[i].idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
	      .attr("cy", function(d, i) { return gradeScale(Number(dataset[i][sub])); })
	      //.style("fill",cor[sub])
	      .duration(600);


	var lineFunction = d3.svg.line()
			.x(function(d, i){return ageScale(Number(d.idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
			.y(function(d, i){return gradeScale(Number(d[sub])); })
			.interpolate("linear");

	grafico.selectAll(".lineGrade")
			.transition()
            .attr("d", lineFunction(dataset))
            //.style("stroke",cor[sub])
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
          .style("fill", function(d) { return cor[sub]; })
          .duration(600);


	vis.selectAll(".stateText")
		.transition()
        .text(function(){return "" + nomeDoEstado[estadoAtual];})
        .duration(600);	
/*
	grafico.selectAll(".z-axis-text")
		.transition()
	    .style("fill", cor[sub])
	    .duration(600);
*/
}
function makeMenu(subjeto){

	var prod = [//"Brasil",	
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

	var norte = ["AM",
				 "AP",
				 "AC",
				 "PA",
				 "TO",
				 "RR",
				 "RO"];
				 norte.sort();
	var nordeste = ["MA",
					"CE",
					"PI",
					"PE",
					"SE",
					"PB",
					"AL",
					"RN",
					"BA"];
					nordeste.sort();
	var centro = ["MT",
				  "MS",
				  "GO",
				  "DF"];
				  centro.sort();
	var sudeste = ["RJ",
				   "ES",
				   "SP",
				   "MG"];
				   sudeste.sort();
	var sul = ["PR",
			   "SC",
			   "RS"];
			   sul.sort();


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
/*
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
*/
	 var vetor = ["Brasil"]
	manu.selectAll(".manu-text .bra")
	  .data(vetor)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("bra", true)
      .attr("x",posicaoMenuBrasilX)
      .attr("y", posicaoMenuBrasilY)
      .text( function (d) { return "" + d; })
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });

	manu.selectAll(".manu-text .norte")
	  .data(norte)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("norte", true)
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return 0*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i)*separacaoMenuY + shiftMenuY;})
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });

	manu.selectAll(".manu-text .nordeste")
	  .data(nordeste)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("nordeste", true)
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return 1*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i)*separacaoMenuY + shiftMenuY;})
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });

	manu.selectAll(".manu-text .centro")
	  .data(centro)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("centro", true)
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return 2*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i)*separacaoMenuY + shiftMenuY;})
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });

	manu.selectAll(".manu-text .sudeste")
	  .data(sudeste)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("sudeste", true)
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return 3*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i)*separacaoMenuY + shiftMenuY;})
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });

	manu.selectAll(".manu-text .sul")
	  .data(sul)
	  .enter()
      .append("text")
      .attr("class", "manu-text")
      .classed("sul", true)
      .text( function (d) { return "" + d; })
      .attr("x", function(d, i){return 4*separacaoMenuX + shiftMenuX;})
      .attr("y", function(d, i){return (i)*separacaoMenuY + shiftMenuY;})
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
      	manu.selectAll(".manu-text")
      		.style("fill",function(){return});

      		d3.select(this).style("fill", "orange");

      });
	manu.attr("transform", "translate(" + menuX + "," + menuY + ")");
/*
      manuImage.on("click", function(){
      	manu.remove();
      	manuImage.on("click", function(){ makeMenu()});
      });
*/

	
	
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
	      .attr("height",function(d, i){ return tamanhoy*taxaY - quantScale2(Number(d.quantidade));})
	      .style("fill", function(d) { return cor[sub]; });

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
        .attr("x", function(d, i) { return posicaoTextoAuxiliarX; })
        .attr("y", function(d, i){ return posicaoTextoAuxiliarY;})
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