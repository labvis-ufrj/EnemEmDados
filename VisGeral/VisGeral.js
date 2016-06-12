
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisGeral(){
	grafico = vis.selectAll("g")
			.data([0])
		   	.enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(100,50)";});

	grafico.data(dataset)
		    .enter();

	var xAxis = d3.svg.axis()
	    .scale(stateScale)
	    .orient("bottom")
		.tickFormat(function(d) { return "" + dataset[d].estado; });

	var yAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("left");

	grafico.append("g")
	      .attr("class", "y-axis")
	      .call(yAxis);


  	grafico.selectAll(".dotLines")
		.data(dataset)
		.enter()
		.append("line")
		.attr("x1", function(d, i) { return stateScale(Number( i )); })     // x position of the first end of the line
		.attr("y1", 0)      // y position of the first end of the line
		.attr("x2", function(d, i) { return stateScale(Number( i )); })     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.attr("class", "dotLines");
		


  	grafico.selectAll(".dotLinguagens")
	      .data(dataset)
	      .enter()
	      .append("rect")
	      .attr("class", "dotLinguagens")
		  .attr("width", 10)
	      .attr("height", 10)
	      .attr("x", function(d, i) { return stateScale(Number( i )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Linguagens"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Linguagens: " + d["Linguagens"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  });
	    
	grafico.selectAll(".dotHumanas")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotHumanas")
	      .attr("r", 3.5)
	      .attr("cx", function(d, i) { return stateScale(Number( i )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Humanas"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Humanas: " + d["Humanas"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  });

	grafico.selectAll(".dotNatureza")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotNatureza")
	      .attr("r", 5)
	      .attr("cx", function(d, i) { return stateScale(Number( i )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Natureza"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Natureza: " + d["Natureza"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  });

	grafico.selectAll(".dotMatematica")
	      .data(dataset)
	      .enter()
	      .append("rect")
	      .attr("class", "dotMatematica")
		  .attr("width", 10)
	      .attr("height", 10)
	      .attr("x", function(d, i) { return stateScale(Number( i )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Matematica"])); })
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Matematica: " + d["Matematica"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  });


	grafico.selectAll(".dotRedacao")
	      .data(dataset)
	      .enter()
	      .append("polygon")
	      .attr("class", "dotRedacao")
	      .attr("points", function(d, i){
		    	var point = [];
		    	var lado = 10
		    	point[1] = (stateScale(Number( i )) - lado/2) + ','
		    	point[2] = gradeScale(Number(d["Redacao"])) + ' '
		    	point[3] = (stateScale(Number( i )) + lado/2) + ','
		    	point[4] = (gradeScale(Number(d["Redacao"]))) + ' '
		    	point[5] = (stateScale(Number( i ))) + ','
		    	point[6] = (gradeScale(Number(d["Redacao"])) - lado*1.85/2) + '' 
		    	
		    	
		    	var points = '';

		    	for (i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})
	      .on("mouseover", function(d, i){
	      	return tooltip.style("visibility", "visible")
	      					.text(function(e){ return "Redacao: " + d["Redacao"]});
	      })
  	      .on("mouseout", function(d, i){
	      	return tooltip.style("visibility", "hidden")
	      					.text(function(e){ return ""});
	      })
	      .on("mousemove", function(){
        	return tooltip.style("top",  (event.pageY-10)+"px")
    			            .style("left", (event.pageX+10)+"px");
      	  });



  	grafico.selectAll(".textLabels")
	      .data(dataset)
	      .enter()
	      .append("text")
	      .attr("class", "textLabels")
	      .text( function (d) { return "" + d.estado; })
	      .attr("x", function(d, i) { return stateScale(Number( i )); })
	      .attr("y", tamanhoy + 20)

    grafico.selectAll(".lineX")
    	.data([0])
    	.enter()
    	.append("line")
    	.attr("x1", 0)     // x position of the first end of the line
		.attr("y1", tamanhoy)      // y position of the first end of the line
		.attr("x2", tamanhox)     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.attr("class", "lineX");
}








function VisGeralUpdate(dados){


 	var stateScale2 = function(d){
		for (var indice = 0; indice < dados.length; indice++){
			if (d === dados[indice]){ return indice;};
		};
		return 0;
	};
  	grafico.selectAll(".dotLines")
  		.transition()
		.attr("x1", function(d, i) { return stateScale(Number( stateScale2(d) )); })     // x position of the first end of the line
		.attr("y1", 0)      // y position of the first end of the line
		.attr("x2", function(d, i) { return stateScale(Number( stateScale2(d) )); })     // x position of the second end of the line
		.attr("y2", tamanhoy)
		.delay(function(d, i){return 80*i;})
		.duration(1000);
		
  	grafico.selectAll(".dotLinguagens")
  		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Linguagens"])); })
	      .delay(function(d, i){return 80*i;})
	      .duration(1000);
	      //.style("fill", function(d) { return "blue"; });

	grafico.selectAll(".dotHumanas")
		  .transition()
	      .attr("cx", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Humanas"])); })
	      .delay(function(d, i){return 80*i;})
	      .duration(1000);

	grafico.selectAll(".dotNatureza")
		  .transition()
	      .attr("cx", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Natureza"])); })
	      .delay(function(d, i){return 80*i;})
	      .duration(1000);

	grafico.selectAll(".dotMatematica")
		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )) - 5; })
	      .attr("y", function(d) { return gradeScale(Number(d["Matematica"])); })
	      .delay(function(d, i){return 80*i;})
	      .duration(1000);

	grafico.selectAll(".dotRedacao")
		  .transition()
	      .attr("points", function(d, i){
		    	var point = [];
		    	var lado = 10
		    	point[1] = (stateScale(Number( stateScale2(d) )) - lado/2) + ','
		    	point[2] = gradeScale(Number(d["Redacao"])) + ' '
		    	point[3] = (stateScale(Number( stateScale2(d) )) + lado/2) + ','
		    	point[4] = (gradeScale(Number(d["Redacao"]))) + ' '
		    	point[5] = (stateScale(Number( stateScale2(d) ))) + ','
		    	point[6] = (gradeScale(Number(d["Redacao"])) - lado*1.85/2) + '' 
		    	
		    	
		    	var points = '';

		    	for (var i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})
	      .delay(function(d, i){return 80*i;})
	      .duration(1000);



  	grafico.selectAll(".textLabels")
  		  .transition()
	      .attr("x", function(d, i) { return stateScale(Number( stateScale2(d) )); })
	      .attr("y", tamanhoy + 20)
  	      .delay(function(d, i){return 80*i;})
	      .duration(1000);

console.log(dados);
}