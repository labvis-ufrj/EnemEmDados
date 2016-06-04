
//  Exemplo em http://bl.ocks.org/mbostock/3887118


function VisIdade(subject){
/*
	var tamanhoy = 600;

	var tamanhox = 800;

	var maxQuant = maxVal = minVal = minQuant = 0;

	var subjects = ["geral",
					"matematica",
                    "linguagens",
                    "humanas", 
                    "natureza",
                    "redacao"];
	
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
	var colorGrades = d3.scale.linear()
	    .domain([minVal, maxVal])
	    .range(["rgb(12,239,255)","rgb(05,00,49)"]);

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

	var gradeScale = d3.scale.linear()
	    .domain([minVal*0.975, maxVal*1.025])
	    .range([tamanhoy, 0]);

	var ageScale = d3.scale.linear()
	    //.domain([primeiraIdade, ultimaIdade])
	    .domain([dataset[0].idade,dataset[dataset.length-1].idade])
	    .range([0,tamanhox]);

//console.log(maxQuant);
//	var quantScale = d3.scale.log()
 //   	.base(Math.E)
	var quantScale = d3.scale.linear()
	    .domain([0, maxQuant*1.05])
	    .range([tamanhoy, 0]);
*/
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
	    .scale(ageScale)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(quantScale)
	    .orient("left");
//	    .tickFormat(function(d) { return "" + Math.round(d); });
	
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

	grafico.selectAll("lineGrade")
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
	      //.transition()
	      //.attr("r", 3.5)
	      .attr("cx", function(d) { return ageScale(Number(d.idade)); })
	      .attr("cy", function(d) { return gradeScale(Number(d[subject])); });
	      //.duration(600);
	      //.style("fill", function(d) { return "blue"; });

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
	      //.attr("r", 3.5)
	      .attr("cx", function(d) { return ageScale(Number(d.idade)); })
	      .attr("cy", function(d) { return gradeScale(Number(d[subject])); })
	      .duration(600);


	var lineFunction = d3.svg.line()
			.x(function(d){return ageScale(Number(d.idade)); })
			.y(function(d){return gradeScale(Number(d[subject])); })
			.interpolate("linear");

	grafico.selectAll("lineGrade").remove()

	grafico.selectAll("lineGrade")
			.data([1])
			.enter()
			.transition()
			//.delay(800)
			//.append("path")
			.attr("class","lineGrade")
            .attr("d", lineFunction(dataset))
            .attr("fill", "none");        
}