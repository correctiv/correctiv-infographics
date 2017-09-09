// Load the Infographic
var s = Snap("#snappy");


Snap.load("infographic4.svg", function(f) {

	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended
	var background = f.select("#background"); // the "background" will be appended before the rest
	var table = f.select("#table"); // "table" will be appended

	var factory = f.selectAll("*[id^='kraftwerk']");
	var factoryLineA = f.selectAll("*[id^='select']>.line-a");
	var graphLines = f.selectAll("*[id^='select']>.graphs>*[class^='year-20']");
	var infoText1 = f.select("#infotext-1");
	var infoText2 = f.select("#infotext-2");
	var infoPop =  f.select("#info-icon>circle"); // small info circle to animate
	var smoke1, smoke2;

	s.append(background);

	// Lines from Factories to Graphs
	factoryLineA.forEach( function(e) {
		var lineLength = e.getTotalLength();

		e.attr({
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength // <- ici retirer le testeur /5
    	});
	});

	// Graphs Lines:
	graphLines.forEach( function(e) {
		var lineLength = e.getTotalLength();

		e.attr({
        'stroke-dasharray': lineLength + ' ' + lineLength,
        'stroke-dashoffset': lineLength // <- ici retirer le testeur /5
    	});
	});

	// Factories & Graphs animations:
	factory.forEach( function(a) {

		a.click(function(e) {
			var selectParent = this.parent();
			// to animate lines-a:
			var lineA = selectParent.select('.line-a');
			var lineALength = lineA.getTotalLength();
			// to animate graph-lines:
			// to animate year-2013 line:
			var year13Line = selectParent.select('.year-2013');
			var year13Length = year13Line.getTotalLength();
			// to animate year-2014 line:
			var year14Line = selectParent.select('.year-2014');
			var year14Length = year14Line.getTotalLength();
			// to animate year-2015 line:
			var year15Line = selectParent.select('.year-2015');
			var year15Length = year15Line.getTotalLength();

			if (this.hasClass('selected') != 1) {
				this.addClass('selected');

				lineA.attr({'stroke-linecap': 'round' }).animate({ strokeDashoffset : 0 }, 250, mina.ease);

				setTimeout(function() {
					year13Line.animate({ strokeDashoffset : 0 }, 250, mina.ease);
					year14Line.animate({ strokeDashoffset : 0 }, 250, mina.ease);
					year15Line.animate({ strokeDashoffset : 0 }, 250, mina.ease);
				}, 250);

			} else {
				this.removeClass('selected');

				lineA.animate({ strokeDashoffset : lineALength }, 250, mina.ease);

				year13Line.animate({ strokeDashoffset : year13Length }, 250, mina.ease);
				year14Line.animate({ strokeDashoffset : year14Length }, 250, mina.ease);
				year15Line.animate({ strokeDashoffset : year15Length }, 250, mina.ease);
				
				setTimeout(function() {
					lineA.attr({'stroke-linecap': 'inherit' });
				}, 250);

			}


			// to reveal/hide table:
			if (($('[id^=kraftwerk].selected').length) >= 1) {
				table.addClass('show');
				reset.addClass('show');
				infoText1.removeClass('show');
				infoText2.addClass('show');
			} else {
				table.removeClass('show');
				reset.removeClass('show');
				infoText1.addClass('show');
				infoText2.removeClass('show');
			}

		});

		// Factories scale animations:
		a.mouseover(function() {
			this.animate({
				transform: "s1.12, 1.12" 
			}, 250, mina.ease);
		}).mouseout(function() {
			if (this.hasClass('selected') != 1) {
			    this.stop();
			    this.animate({
					transform: "s1, 1" 
				}, 250, mina.ease);
			}
		});

	});

	// Reset graphic:
	var reset = f.select("#reset");

	reset.click(function() {

		for (var i = 0; i < factory.length; i++) {
			if (factory[i].attr('class') == 'selected' ) {
				factories = factory[i];
				factories.removeClass('selected');

				// Factory scale reset:
				factories.animate({ transform: "s1, 1" }, 250, mina.ease);

				var selectParent = factories.parent();
				// to animate lines-a:
				var lineA = selectParent.select('.line-a');
				var lineALength = lineA.getTotalLength();
				// to animate graph-lines:
				// to animate year-2013 line:
				var year13Line = selectParent.select('.year-2013');
				var year13Length = year13Line.getTotalLength();
				// to animate year-2014 line:
				var year14Line = selectParent.select('.year-2014');
				var year14Length = year14Line.getTotalLength();
				// to animate year-2015 line:
				var year15Line = selectParent.select('.year-2015');
				var year15Length = year15Line.getTotalLength();

				// animation reset:
				lineA.animate({ strokeDashoffset : lineALength }, 250, mina.ease);

				year13Line.animate({ strokeDashoffset : year13Length }, 250, mina.ease);
				year14Line.animate({ strokeDashoffset : year14Length }, 250, mina.ease);
				year15Line.animate({ strokeDashoffset : year15Length }, 250, mina.ease);
			} 
		}

		// Reset all lines-a caps to butt:
		setTimeout(function() {
			factoryLineA.attr({'stroke-linecap': 'inherit' });
		}, 250);

		// Hide table, infotext-2 & reset:
		table.removeClass('show');
		reset.removeClass('show');
		infoText1.addClass('show');
		infoText2.removeClass('show');


	});


	// Infinite animation info-icon circle:
	function infoPulse(){
		infoPop.stop().animate({ 
			r: 23 
		}, 1500, mina.elastic, function(){ 
			infoPop.attr({ 
				r: 20.5
			}); infoPulse(); // Repeat this animation so it appears infinite.
		}, 200, mina.ease);
	}
	infoPulse();

	s.append(mainGraph);
	s.append(table);
//	s.append(bigCircle);
});


/* Add sound 
function playclip() {
	if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
		if (document.all) {
		  document.all.sound.src = "audio/click.mp3";
		}
	}

else {
		{ 
			var audio = document.getElementsByTagName("audio")[0];
			audio.play();
		}
	}
}
*/
