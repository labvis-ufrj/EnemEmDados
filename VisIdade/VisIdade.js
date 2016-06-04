
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisIdade(subject){
	grafico = vis.selectAll("g")
			.data([0])
		   	.enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(100,50)";});

	grafico.data(dataset)
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
	      .data(dataset)
	      .enter()
	      .append("rect")
	      .attr("class", "dotQuant")
	      //.attr("r", 3.5)
	      .attr("x", function(d) { return ageScale(Number(d.idade)) - (ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade))/2); })
	      .attr("y", function(d) { 
	      	if (Number(d.quantidade) == 0){return 0;}
	      	return quantScale(Number(d.quantidade)); 
	      })
	      .attr("width", function(){ return ageScale(Number(dataset[2].idade)) - ageScale(Number(dataset[1].idade));})
	      .attr("height",function(d, i){ return tamanhoy - quantScale(Number(d.quantidade));});
	      //.style("fill", function(d) { return "brown"; });

	var lineFunction = d3.svg.line()
			.x(function(d){return ageScale(Number(d.idade)); })
			.y(function(d){return gradeScale(Number(d[subject])); })
			.interpolate("linear");

	grafico.selectAll(".lineGrade")
			.data([1])
			.enter()
			.append("path")
			.attr("class","lineGrade")
            .attr("d", lineFunction(dataset))
            .attr("fill", "none");

  	grafico.selectAll(".dotGrade")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotGrade")
	      .attr("cx", function(d) { return ageScale(Number(d.idade)); })
	      .attr("cy", function(d) { return gradeScale(Number(d[subject])); });

/*
	grafico.selectAll(".dotGrade")
	      .data(dataset)
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

  	grafico.selectAll(".dotGrade")
	      .transition()
	      .attr("cx", function(d) { return ageScale(Number(d.idade)); })
	      .attr("cy", function(d) { return gradeScale(Number(d[subject])); })
	      .duration(600);


	var lineFunction = d3.svg.line()
			.x(function(d){return ageScale(Number(d.idade)); })
			.y(function(d){return gradeScale(Number(d[subject])); })
			.interpolate("linear");

	grafico.selectAll(".lineGrade")

			.transition()
            .attr("d", lineFunction(dataset))
            .duration(600)
            .attr("fill", "none");        
}