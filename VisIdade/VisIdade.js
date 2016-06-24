
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisIdade(subject, dados){
	grafico = vis.selectAll("g")
			.data([0])
		   	.enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(100,50)";});

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
			.y(function(d){return gradeScale(Number(d[subject])); })
			.interpolate("linear");

	grafico.selectAll("lineGrade")
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
	      .attr("cy", function(d) { return gradeScale(Number(d[subject])); })
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
function update(subject){



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



  	grafico.selectAll(".dotGrade")
	      .transition()
	      .attr("cx", function(d, i) { return ageScale(Number(dataset[i].idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
	      .attr("cy", function(d, i) { return gradeScale(Number(dataset[i][subject])); })
	      .duration(600);


	var lineFunction = d3.svg.line()
			.x(function(d, i){return ageScale(Number(d.idade)) + (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade)))/2; })
			.y(function(d, i){return gradeScale(Number(d[subject])); })
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