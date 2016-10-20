function VisMap(subject){
var maxVal = minVal = 0;
//	if (subject!="Geral"){
		maxVal = minVal = Number(dataset[0][subject]);
		for (indice = 0; indice < dataset.length ; indice++){
			if (Number(dataset[indice][subject]) > maxVal){
				maxVal = Number(dataset[indice][subject]);
			};
			if (Number(dataset[indice][subject]) < minVal){
				minVal = Number(dataset[indice][subject]);
			};
		};
		/* else {

	}
*/
	var colorGrades = d3.scale.linear()
	    .domain([minVal, (minVal + (maxVal - minVal)/2)])
	    .range([ corMinima[subject], corDoMeio[subject]]);

	var colorGrades2 = d3.scale.linear()
	    .domain([(minVal + (maxVal - minVal)/2), maxVal])
	    .range([ corDoMeio[subject], corMaxima[subject]]);

	var opacityGrades = d3.scale.linear()
	    .domain([minVal, maxVal])
	    .range([0.25,0.9]);


        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", corMinima[subject])
            .attr("stop-opacity", 1);

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", corDoMeio[subject])
            .attr("stop-opacity", 1);

        gradiente.append("rect")
        	.attr("class","retangulo1")
            .attr("width", gradientWidth/2)
            .attr("height", gradientHeight)
            .style("fill", "url(#gradient)");
//


        gradient2.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", corDoMeio[subject])
            .attr("stop-opacity", 1);

        gradient2.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", corMaxima[subject])
            .attr("stop-opacity", 1);

        gradiente.append("rect")
        	.attr("class","retangulo2")
        	.attr("x", gradientWidth/2 -1)
            .attr("width", gradientWidth/2)
            .attr("height", gradientHeight)
            .style("fill", "url(#gradient2)");            


    gradiente.selectAll(".text-left")
    	.remove();
    gradiente.selectAll(".text-right")
    	.remove();

    gradiente.selectAll(".text-left")
    	.data([0])
    	.enter()
    	.append("text")
    	.attr("class", "text-left")
    	.attr("x", gradientText1X - gradientX-30)
    	.attr("y", gradientText1Y - gradientY + 15)
    	.text(function(){return "" + minVal;});

    gradiente.selectAll(".text-right")
    	.data([0])
    	.enter()
    	.append("text")
    	.attr("class", "text-right")
    	.attr("x", gradientText2X- gradientX)
    	.attr("y", gradientText2Y - gradientY + 15)
    	.text(function(){return "" + maxVal;});


	map = vis.selectAll("g")
		    .data(dataset)
		    .enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(" + mapX + "," + mapY + "0)";});

	    map.append("polygon")
		    .attr("points", function(d){
		    	var point = [];
		    	point[1] = (Number(d.x)*dx + raio) + ','
		    	point[2] = Number(d.y)*dy + ' '
		    	point[3] = (Number(d.x)*dx + raio/2) + ','
		    	point[4] = (Number(d.y)*dy - raio*Math.sqrt(3)/2)+ ' '
		    	point[5] = (Number(d.x)*dx - raio/2) + ','
		    	point[6] = (Number(d.y)*dy - raio*Math.sqrt(3)/2) + ' ' 
		    	point[7] = (Number(d.x)*dx - raio) + ','
		    	point[8] = Number(d.y)*dy + ' '
		    	point[9] = (Number(d.x)*dx - raio/2) + ','
		    	point[10] = (Number(d.y)*dy + raio*Math.sqrt(3)/2) + ' ' 
		    	point[11] = (Number(d.x)*dx + raio/2) + ','
		    	point[12] = (Number(d.y)*dy + raio*Math.sqrt(3)/2) + ' ' 
		    	point[13] = (Number(d.x)*dx + raio)+ ','
		    	point[14] = Number(d.y)*dy
		    	
		    	var points = '';

		    	for (i = 1; i < point.length; i++) { 
				    points += point[i];
				}
		    	return points})
		    .attr("class", "poligonos")
		    .on("mouseover", function(d,i) {
		    	return	d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "visible"
			    			}
			    			return "hidden"});
			})
			.on("mouseout", function(d, i) {
				return d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "hidden"
			    			}
			    			return "hidden"});
			})
		    .style("stroke",function(d){
		    	if(Number(d[subject])< (minVal + (maxVal - minVal)/2)){
		    		return colorGrades(Number(d[subject]));
		    	}
		    	return colorGrades2(Number(d[subject]));
			})
		    .style("opacity", 1)//function(d){return opacityGrades(Number(d[subject]))})
		    .style("stroke-width",espessuraContorno)
		    .style("fill", function(d){
		    	if(Number(d[subject])< (minVal + (maxVal - minVal)/2)){
		    		return colorGrades(Number(d[subject]));
		    	}
		    	return colorGrades2(Number(d[subject]));
		});

		//vis.update();

		map.append("text")
			.attr("class", "nome")
			.style("text-anchor","middle")
			.attr("x",function(d){return Number(d.x)*dx + 0 ;})
			.attr("y",function(d){return Number(d.y)*dy + 6;})
			.style("fill", function(d){
              	if (Number(d[subject])>((maxVal+minVal)/2)){return "white";}
              	return "black";})
			.style("font-size","15px")
			.style("text-anchor", "left")
			.text(function(d){return d.estado;})
			.on("mouseover", function(d,i) {
		    	return	d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "visible"
			    			}
			    			return "hidden"});
			})
			.on("mouseout", function(d, i) {
				return d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "hidden"
			    			}
			    			return "hidden"});
			});

		tx = map.append("text")
			.attr("class", "nota")
			.attr("x",function(d){return Number(d.x)*dx;})
			.attr("y",function(d){return Number(d.y)*dy + 026;})
			.style("fill", function(d){
              	if (Number(d[subject])>((maxVal+minVal)/2)){return "white";}
              	return "black";})
			.style("font-size","15px")
			.text(function(d){return d[subject];})
			.style("visibility", "hidden")
			.style("text-anchor", "middle")
			.on("mouseover", function(d,i) {
		    	return	d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "visible"
			    			}
			    			return "hidden"});
			})
			.on("mouseout", function(d, i) {
				return d3.selectAll("text")
		    			.filter(function(e){
		    				return d3.select(this).attr("class") == "nota";
		    				})
		    			.style("visibility",function(e){
			    			if (e === d){
			    				return "hidden"
			    			}
			    			return "hidden"});
			});
			//.on("mouseover", this.style("visibility", "visible"));

			vis.selectAll(".nameText")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "nameText")
	        //.attr("transform", "rotate(-90)")
	        .attr("x", nameTextX )
	        .attr("y", nameTextY )
	        //.style("text-anchor", "middle")
	        .text(function(d, i){return "" + traducao[subject];});

	        vis.selectAll(".cartogramaText")
			.data([0])
			.enter()
			.append("text")      // text label for the x axis
	        .attr("class", "cartogramaText")
	        //.attr("transform", "rotate(-90)")
	        .attr("x", cartogramaTextX )
	        .attr("y", cartogramaTextY )
	        //.style("text-anchor", "middle")
	        .text(function(d, i){return "Médias em";});

}

function visMapUpgrade(subject){
	
	console.log("entrou");

	var maxVal = minVal = 0;
//	if (subject!="Geral"){
		maxVal = minVal = Number(dataset[0][subject]);
		for (indice = 0; indice < dataset.length ; indice++){
			if (Number(dataset[indice][subject]) > maxVal){
				maxVal = Number(dataset[indice][subject]);
			};
			if (Number(dataset[indice][subject]) < minVal){
				minVal = Number(dataset[indice][subject]);
			};
		};
		/* else {

	}
*/

	var colorGrades = d3.scale.linear()
	    .domain([minVal, (minVal + (maxVal - minVal)/2)])
	    .range([ corMinima[subject], corDoMeio[subject]]);

	var colorGrades2 = d3.scale.linear()
	    .domain([(minVal + (maxVal - minVal)/2), maxVal])
	    .range([ corDoMeio[subject], corMaxima[subject]]);

	var opacityGrades = d3.scale.linear()
	    .domain([minVal, maxVal])
	    .range([0.25,0.9]);



/*

 var gradient3 = gradiente.append("defs")
	          .append("linearGradient")
	            .attr("id", "gradient")
	            .attr("x1", "0%")
	            .attr("x2", "100%")
	            .attr("spreadMethod", "pad");



gradiente.selectAll(".retangulo1").remove();

*/
        gradient.selectAll("stop")
        	.filter(function(d,i){return (d3.select(this).attr("offset") == "0%");})
        	.transition()
            //.attr("offset", "0%")
            .attr("stop-color", corMinima[subject])
            .attr("stop-opacity", 1)
            .duration(600);

        gradient.selectAll("stop")
        	.filter(function(d,i){return d3.select(this).attr("offset") == "100%";})
        	.transition()
            //.attr("offset", "100%")
            .attr("stop-color", corDoMeio[subject])
            .attr("stop-opacity", 1)
            .duration(600);

/*
        gradiente.append("rect")
        	.attr("class","retangulo1")
            .attr("width", gradientWidth/2)
            .attr("height", gradientHeight)
            .style("fill", "url(#gradient3)");

*/
        gradient2.selectAll("stop")
        	.filter(function(d,i){return (d3.select(this).attr("offset") == "0%");})
        	.transition()
            //.attr("offset", "0%")
            .attr("stop-color", corDoMeio[subject])
            .attr("stop-opacity", 1)
            .duration(600);

        gradient2.selectAll("stop")
        	.filter(function(d,i){return (d3.select(this).attr("offset") == "100%");})
        	.transition()
            //.attr("offset", "100%")
            .attr("stop-color", corMaxima[subject])
            .attr("stop-opacity", 1)
            .duration(600);
/*
        gradiente.selectAll(".retangulo2")
            .transition()
            .style("fill", "url(#gradient2)")
            .duration(600);            
*/
    gradiente.selectAll(".text-left")
    	.transition()
    	.text(function(){return "" + minVal;})
    	.duration(600);

    gradiente.selectAll(".text-right")
    	.transition()
    	.text(function(){return "" + maxVal;})
    	.duration(600);


	map = vis.selectAll("g");

	    map.selectAll(".poligonos")
	    	.transition()
	    	.style("stroke",function(d){
		    	if(Number(d[subject])< (minVal + (maxVal - minVal)/2)){
		    		return colorGrades(Number(d[subject]));
		    	}
		    	return colorGrades2(Number(d[subject]))
		    })
		    .style("fill", function(d){
		    	if(Number(d[subject])< (minVal + (maxVal - minVal)/2)){
		    		return colorGrades(Number(d[subject]));
		    	}
		    	return colorGrades2(Number(d[subject]));
			})
		    .duration(600);

		//vis.update();

		tx = map.selectAll(".nota")
			.transition()
			.text(function(d){return d[subject];})
			.duration(600);
			//.on("mouseover", this.style("visibility", "visible"));

		vis.selectAll(".nameText")
			.transition()
	        .text(function(d, i){return "" + traducao[subject]})
	        .duration(600);


}