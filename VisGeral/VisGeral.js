
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisGeral(){

	var tamanhoy = 600;
	var tamanhox = 800;
 
	var maxQuant = maxVal = minVal = minQuant = 0;

	var subjects = ["Matematica",
	                    "Linguagens",
	                    "Humanas", 
	                    "Natureza",
	                    "Redacao"];
	

    var sub = 0;
		maxVal = minVal = Number(dataset[0][subjects[0]]);
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
/*	var colorGrades = d3.scale.linear()
	    .domain([minVal, maxVal])
	    .range(["rgb(12,239,255)","rgb(05,00,49)"]);
*/
/*
	var primeiraIdade = 0;
	while (1){
		if (dataset[primeiraIdade].quantidade != "0"){break}
		primeiraIdade++;
	};
	var ultimaIdade = dataset.length - 1;
	while (1){
		if (dataset[ultimaIdade].quantidade != "0"){break}
		ultimaIdade--;
	};
*/
	var gradeScale = d3.scale.linear()
	    //.domain([minVal*0.95, maxVal*1.05])
	    .domain([300, 600])
	    .range([tamanhoy, 0]);

	var stateScale = d3.scale.linear()
	    //.domain([primeiraIdade, ultimaIdade])
	    .domain([-1, dataset.length])
	    .range([0,tamanhox]);

//console.log(maxQuant);
//	var quantScale = d3.scale.log()
 //   	.base(Math.E)
	var quantScale = d3.scale.linear()
	    .domain([0, maxQuant*1.05])
	    .range([tamanhoy, 0]);

	grafico = vis.selectAll("g")
			.data([0])
		   	.enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(100,50)";});

	grafico.data(dataset)
		    .enter();


	 // ageScale.domain(d3.extent(dataset, function(d) { return Number(d.idade); })).nice();
	 // quantScale.domain(d3.extent(dataset, function(d) { return Number(d.quantidade); })).nice();

	var xAxis = d3.svg.axis()
	    .scale(stateScale)
	    .orient("bottom")
		.tickFormat(function(d) { return "" + dataset[d].estado; });

	var yAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("left");
//	    .tickFormat(function(d) { return "" + Math.round(d); });
	/*
	var zAxis = d3.svg.axis()
	    .scale(gradeScale)
	    .orient("right");
	*/
	/*
	grafico.append("g")
	      .attr("class", "x-axis")
	      .attr("transform", "translate(0," + tamanhoy + ")")
	      .call(xAxis);
*/
	grafico.append("g")
	      .attr("class", "y-axis")
	      .call(yAxis);

/*
	grafico.append("g")
	      .attr("class", "z-axis")
	      .attr("transform", "translate(" + tamanhox + ", 0)")
	      .call(zAxis);
	      //.style("fill","blue");
  */	
  	/*
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

	grafico.selectAll("lineGrade")
			.data([1])
			.enter()
			.append("path")
			.attr("class","lineGrade")
            .attr("d", lineFunction(dataset))
            .attr("fill", "none");
  	*/

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
	      //.attr("r", 3.5)
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
	      //.style("fill", function(d) { return "blue"; });

	grafico.selectAll(".dotHumanas")
	      .data(dataset)
	      .enter()
	      .append("circle")
	      .attr("class", "dotHumanas")
	      //.attr("r", 3.5)
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
	      //.attr("r", 3.5)
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
	      .append("circle")
	      .attr("class", "dotMatematica")
	      //.attr("r", 3.5)
	      .attr("cx", function(d, i) { return stateScale(Number( i )); })
	      .attr("cy", function(d) { return gradeScale(Number(d["Matematica"])); })
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
function onmouseover(d, i){

}