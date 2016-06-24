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
	    .domain([minVal, maxVal])
	    .range(["rgb(12,239,255)","rgb(05,00,49)"]);


	var opacityGrades = d3.scale.linear()
	    .domain([minVal, maxVal])
	    .range([0.25,0.9]);


	map = vis.selectAll("g")
		    .data(dataset)
		    .enter()
		    .append("g")
			.attr("transform",function(d,i){return "translate(150,0)";});

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
		    //.style("stroke","grey")
		    .style("opacity", function(d){return opacityGrades(Number(d[subject]))})
		    .style("stroke-width",0)
		    .style("fill", function(d){return colorGrades(Number(d[subject]));});

		//vis.update();

		map.append("text")
			.attr("class", "nome")
			.attr("x",function(d){return Number(d.x)*dx;})
			.attr("y",function(d){return Number(d.y)*dy + 5;})
			.style("fill", function(d){
              	if (Number(d[subject])>((maxVal+minVal)/2)){return "white";}
              	return "black";})
			.style("font-size","15px")
			.style("text-anchor", "middle")
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
			.attr("y",function(d){return Number(d.y)*dy + 20;})
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

}