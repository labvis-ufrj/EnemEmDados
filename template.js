navbar = document.createElement("div");
navbar.innerHTML = '<div class="container">\
		    <div class="header clearfix">\
		    	<div class="links">\
			        <nav>\
			        	<ul class="nav nav-pills pull-left">\
				            <li role="presentation"><a href="./VisMapa/index.html"><img src="map.jpg" alt="Vis Map" width="40" height="40" border="0"></a></li>\
				            <li role="presentation"><a href="http://heitortomaz.github.io/EnemGit/VisGeral">Geral</a></li>\
			            	<li role="presentation"><a href="http://heitortomaz.github.io/EnemGit/VisIdade">Idade</a></li>\
			            	<li role="presentation"><a href="http://heitortomaz.github.io/EnemGit/VisMapa">Mapa</a></li>\
						</ul>\
					</nav>\
				</div>\
				<div class="logos">\
					<nav>\
				        <ul class="nav nav-pills pull-right">\
					        <li role="presentation"><a href="#">Home</a></li>\
					        <li role="presentation"><a href="http://heitortomaz.github.io/EnemGit/VisMapa">About</a></li>\
					        <li role="presentation"><a href="#">Contact</a></li>\
				        </ul>\
			        </nav>\ 
			    </div>\
			</div>\
	    </div>';
body = document.getElementsByTagName("body")[0];
body.insertBefore(navbar,body.firstChild);
