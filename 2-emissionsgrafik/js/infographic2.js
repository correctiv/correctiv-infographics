// Load the Infographic & fractions:
var s = Snap("#snappy");

Snap.load("infographic2.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended
	var radioBtn13 = f.select("#radio-btn-13"), radioBtn13s = f.select("#radio-btn-13>.spot");
	var radioBtn16 = f.select("#radio-btn-16"), radioBtn16s = f.select("#radio-btn-16>.spot"); 
	var	pointer = f.select("#pointer");
	var graph2016 = f.select("#graph-2016");
	var infoPop =  f.select("#pop-info>circle"); // small info circle to animate
	var infoText = f.select("#infotext");

	// 2016 Radio-button spot size initialize:
	radioBtn16s.attr({ r: 8 });
	pointer.attr({ 'transform' : 't400,1150' });

	// Snap Nbrs in eco-txt: 
	var nbrRoll = f.select("#span-nbr-roll"),
		nbrRoll_Xorg = nbrRoll.attr('x');
	// Snap "Mio Tonnen CO" in eco-txt: 
	var nbr2 = f.select("#span-nbr-2"),
		nbr2_Xorg = nbr2.attr('x');
	// Snap Mio Tonnen CO's "2" in eco-txt: 
	var nbr3 = f.select("#span-nbr-3"),
		nbr3_Xorg = nbr3.attr('x');

	// Line horizontale:
	var LineHz = f.select("#line-horizontal"),
		LineHz_Xorg = LineHz.attr('x2'), LineHz_Xnew = '593';
	// Line over 2014:
	var Line14 = f.select("#line-top-2014"),
		Line14_Yorg = Line14.attr('y2'), Line14_Ynew = '324.2';
	// Line over 2015:
	var Line15 = f.select("#line-top-2015"),
		Line15_Yorg = Line15.attr('y2'), Line15_Ynew = '324.2';
	// Line over 2016:
	var Line16 = f.select("#line-top-2016"),
		Line16_Yorg = Line16.attr('y2'), Line16_Ynew = '341.2';
	// Line over 2017:
	var Line17 = f.select("#line-top-2017"),
		Line17_Yorg = Line17.attr('y2'), Line17_Ynew = '372.4';
	// Line over 2018:
	var Line18 = f.select("#line-top-2018"),
		Line18_Yorg = Line18.attr('y2'), Line18_Ynew = '403.6';
	// Line over 2019:
	var Line19 = f.select("#line-top-2019"),
		Line19_Yorg = Line19.attr('y2'), Line19_Ynew = '434.8';

	// Graphic 2016:
	var graphs2016 = f.selectAll("#graph-2016>line");
	var graph2016total = graphs2016[0], 
		g16_totYorg = graph2016total.attr('y2'), 		g16_totYnew = '347.2';
	var graph2016farming = graphs2016[1], 
		g16_farmYorg = graph2016farming.attr('y2'), 	g16_farmYnew = '549.8';
	var graph2016building = graphs2016[2], 
		g16_builYorg = graph2016building.attr('y2'), 	g16_builYnew = '603.3';
	var graph2016transport = graphs2016[3], 
		g16_transYorg = graph2016transport.attr('y2'), 	g16_transYnew = '673.6';
	var graph2016energy = graphs2016[4], 
		g16_nrgyYorg = graph2016energy.attr('y2'), 		g16_nrgyYnew = '806.4';
	// Graphic 2017:
	var graphs2017 = f.selectAll("#graph-2017>line");
	var graph2017total = graphs2017[0], 
		g17_totYorg = graph2017total.attr('y2'), 		g17_totYnew = '378.4';
	var graph2017farming = graphs2017[1], 
		g17_farmYorg = graph2017farming.attr('y2'), 	g17_farmYnew = '568.4';
	var graph2017building = graphs2017[2], 
		g17_builYorg = graph2017building.attr('y2'), 	g17_builYnew = '622';
	var graph2017transport = graphs2017[3], 
		g17_transYorg = graph2017transport.attr('y2'), 	g17_transYnew = '687.4';
	var graph2017energy = graphs2017[4], 
		g17_nrgyYorg = graph2017energy.attr('y2'), 		g17_nrgyYnew = '815.3';
	// Graphic 2018:
	var graphs2018 = f.selectAll("#graph-2018>line");
	var graph2018total = graphs2018[0], 
		g18_totYorg = graph2018total.attr('y2'), 		g18_totYnew = '409.6';
	var graph2018farming = graphs2018[1], 
		g18_farmYorg = graph2018farming.attr('y2'), 	g18_farmYnew = '586.9';
	var graph2018building = graphs2018[2], 
		g18_builYorg = graph2018building.attr('y2'), 	g18_builYnew = '640.8';
	var graph2018transport = graphs2018[3], 
		g18_transYorg = graph2018transport.attr('y2'), 	g18_transYnew = '701.3';
	var graph2018energy = graphs2018[4], 
		g18_nrgyYorg = graph2018energy.attr('y2'), 		g18_nrgyYnew = '824.1';
	// Graphic 2019:
	var graphs2019 = f.selectAll("#graph-2019>line");
	var graph2019total = graphs2019[0], 
		g19_totYorg = graph2019total.attr('y2'), 		g19_totYnew = '440.8';
	var graph2019farming = graphs2019[1], 
		g19_farmYorg = graph2019farming.attr('y2'), 	g19_farmYnew = '605.3';
	var graph2019building = graphs2019[2], 
		g19_builYorg = graph2019building.attr('y2'), 	g19_builYnew = '659.5';
	var graph2019transport = graphs2019[3], 
		g19_transYorg = graph2019transport.attr('y2'), 	g19_transYnew = '715.1';
	var graph2019energy = graphs2019[4], 
		g19_nrgyYorg = graph2019energy.attr('y2'), 		g19_nrgyYnew = '833.3';

	// Exceeds on 2017, 2018, 2019:
	var exceeds = f.selectAll(".exceed")
	var exceed17 = f.select("#graph-2017 .exceed");
		exceed17start = exceed17.attr('y1'), 		exceed17end = exceed17.attr('y2');
		exceed17.attr({'y2' : exceed17start }); // initialize to height 0
	var exceed18 = f.select("#graph-2018 .exceed");
		exceed18start = exceed18.attr('y1'), 		exceed18end = exceed18.attr('y2');
		exceed18.attr({'y2' : exceed18start }); // initialize to height 0
	var exceed19 = f.select("#graph-2019 .exceed");
		exceed19start = exceed19.attr('y1'), 		exceed19end = exceed19.attr('y2');
		exceed19.attr({'y2' : exceed19start }); // initialize to height 0


	radioBtn16.click(function(e) {
		if (this.hasClass('checked') != 1) {
			this.addClass('checked');
			radioBtn13.removeClass('checked');
			graph2016.addClass('uba');

			if (pointer.hasClass('unload') != 1) {
				pointer.addClass('unload')
			}

			// Radio btn spots size:
			radioBtn13s.stop().animate({ r: 8 }, 500, mina.ease);
			radioBtn16s.stop().animate({ r: 12.5 }, 500, mina.elastic);

			// Line horizontale:
			LineHz.animate({ x2 : LineHz_Xnew }, 500, mina.ease);
			// Line over 2014:
			Line14.animate({ y2 : Line14_Ynew }, 100, mina.ease);
			// Line over 2015:
			Line15.animate({ y2 : Line15_Ynew }, 200, mina.ease);
			// Line over 2016:
			Line16.animate({ y2 : Line16_Ynew }, 500, mina.ease);

			// Graphic 2016:
			graph2016total.animate({ y2 : g16_totYnew }, 500, mina.ease);
			graph2016farming.animate({ y2 : g16_farmYnew, }, 500, mina.ease);
			graph2016building.animate({ y2 : g16_builYnew, }, 500, mina.ease);
			graph2016transport.animate({ y2 : g16_transYnew, }, 500, mina.ease);
			graph2016energy.animate({ y2 : g16_nrgyYnew, }, 500, mina.ease);

			setTimeout(function() {
				// Changing Nbrs in eco-txt: 
				nbrRoll.animate({ x : nbrRoll_Xorg - -10 }, 10, mina.ease);
				// how many decimal places allows
				var decimal_places = 2;
				var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
				//  Nbr animation, from 28 to 39: 
				$('#span-nbr-roll').each(function () {
					$(this).prop('Counter',28).animate({
						Counter: $(this).text()
					}, {
						duration: 500,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});

				// Repositioning "Mio Tonnen CO": 
				nbr2.animate({ x : nbr2_Xorg - 12 }, 10, mina.ease);
				// Repositioning "2": 
				nbr3.animate({ x : nbr3_Xorg - 12 }, 10, mina.ease);

				// Line over 2017:
				Line17.animate({ y2 : Line17_Ynew }, 500, mina.ease);
				// Line over 2018:
				Line18.animate({ y2 : Line18_Ynew }, 500, mina.ease);
				// Line over 2019:
				Line19.animate({ y2 : Line19_Ynew }, 500, mina.ease);
				// Graphic 2017:
				graph2017total.animate({ y2 : g17_totYnew }, 500, mina.ease);
				graph2017farming.animate({ y2 : g17_farmYnew }, 500, mina.ease);
				graph2017building.animate({ y2 : g17_builYnew }, 500, mina.ease);
				graph2017transport.animate({ y2 : g17_transYnew }, 500, mina.ease);
				graph2017energy.animate({ y2 : g17_nrgyYnew }, 500, mina.ease);
				// Graphic 2018:
				graph2018total.animate({ y2 : g18_totYnew }, 500, mina.ease);
				graph2018farming.animate({ y2 : g18_farmYnew }, 500, mina.ease);
				graph2018building.animate({ y2 : g18_builYnew }, 500, mina.ease);
				graph2018transport.animate({ y2 : g18_transYnew }, 500, mina.ease);
				graph2018energy.animate({ y2 : g18_nrgyYnew }, 500, mina.ease);
				// Graphic 2019:
				graph2019total.animate({ y2 : g19_totYnew }, 500, mina.ease);
				graph2019farming.animate({ y2 : g19_farmYnew }, 500, mina.ease);
				graph2019building.animate({ y2 : g19_builYnew }, 500, mina.ease);
				graph2019transport.animate({ y2 : g19_transYnew }, 500, mina.ease);
				graph2019energy.animate({ y2 : g19_nrgyYnew }, 500, mina.ease);
				// Exceeds 2017, 2018 & 2019:
				exceed17.animate({ y2 : exceed17end }, 500, mina.ease);
				exceed18.animate({ y2 : exceed18end }, 500, mina.ease);
				exceed19.animate({ y2 : exceed19end }, 500, mina.ease);

 			}, 1250);

			setTimeout(function() {
				exceeds.animate({ opacity : 0 }, 750, mina.ease);
			}, 1750);
		} 
	});

	radioBtn13.click(function(e) {

		if (this.hasClass('checked') != 1) {
			this.addClass('checked');
			radioBtn16.removeClass('checked');
			graph2016.removeClass('uba');

			// Radio btn spots size:
			radioBtn13s.stop().animate({ r: 12.5 }, 500, mina.elastic);
			radioBtn16s.stop().animate({ r: 8 }, 500, mina.ease);

			// Changing Nbrs in eco-txt: 
			nbrRoll.animate({ x : nbrRoll_Xorg }, 500, mina.ease);
			// Repositioning "Mio Tonnen CO": 
			nbr2.animate({ x : nbr2_Xorg }, 500, mina.ease);
			// Repositioning "2": 
			nbr3.animate({ x : nbr3_Xorg }, 500, mina.ease);

			// Line horizontale:
			LineHz.animate({ x2 : LineHz_Xorg }, 500, mina.ease);
			// Line over 2014:
			Line14.animate({ y2 : Line14_Yorg }, 500, mina.ease);
			// Line over 2015:
			Line15.animate({ y2 : Line15_Yorg }, 500, mina.ease);
			// Line over 2016:
			Line16.animate({ y2 : Line16_Yorg }, 500, mina.ease);
			// Line over 2017:
			Line17.animate({ y2 : Line17_Yorg }, 500, mina.ease);
			// Line over 2018:
			Line18.animate({ y2 : Line18_Yorg }, 500, mina.ease);
			// Line over 2019:
			Line19.animate({ y2 : Line19_Yorg }, 500, mina.ease);

			// Graphic 2016:
			graph2016total.animate({ y2 : g16_totYorg }, 500, mina.ease);
			graph2016farming.animate({ y2 : g16_farmYorg }, 500, mina.ease);
			graph2016building.animate({ y2 : g16_builYorg }, 500, mina.ease);
			graph2016transport.animate({ y2 : g16_transYorg }, 500, mina.ease);
			graph2016energy.animate({ y2 : g16_nrgyYorg }, 500, mina.ease);
			// Graphic 2017:
			graph2017total.animate({ y2 : g17_totYorg }, 500, mina.ease);
			graph2017farming.animate({ y2 : g17_farmYorg }, 500, mina.ease);
			graph2017building.animate({ y2 : g17_builYorg }, 500, mina.ease);
			graph2017transport.animate({ y2 : g17_transYorg }, 500, mina.ease);
			graph2017energy.animate({ y2 : g17_nrgyYorg }, 500, mina.ease);
			// Graphic 2018:
			graph2018total.animate({ y2 : g18_totYorg }, 500, mina.ease);
			graph2018farming.animate({ y2 : g18_farmYorg }, 500, mina.ease);
			graph2018building.animate({ y2 : g18_builYorg }, 500, mina.ease);
			graph2018transport.animate({ y2 : g18_transYorg }, 500, mina.ease);
			graph2018energy.animate({ y2 : g18_nrgyYorg }, 500, mina.ease);
			// Graphic 2019:
			graph2019total.animate({ y2 : g19_totYorg }, 500, mina.ease);
			graph2019farming.animate({ y2 : g19_farmYorg }, 500, mina.ease);
			graph2019building.animate({ y2 : g19_builYorg }, 500, mina.ease);
			graph2019transport.animate({ y2 : g19_transYorg }, 500, mina.ease);
			graph2019energy.animate({ y2 : g19_nrgyYorg }, 500, mina.ease);

			// Re-initialize exceed 2017, 2018, 2019 to height 0:
			exceeds.attr({ opacity : 1 });
			exceed17.attr({'y2' : exceed17start });
			exceed18.attr({'y2' : exceed18start });
			exceed19.attr({'y2' : exceed19start });
		}

	});

	var infosAll = f.selectAll("*[class^='info-']");
/*	var infosLines = f.selectAll("*[id^='btw-']>line"); */

	infosAll.forEach( function(a) {

		a.mouseover(function(e) { 
			iconClass = this.attr('class');

			for (var i = 0; i < infosAll.length; i++) {
				if (infosAll[i].attr('class') == iconClass ) {
					infosAll[i].addClass('check');
				} /*
				if (infosAll[i].attr('id') == btwIDs ) {
					infosLines.animate({ r: 23 }, 500, mina.ease;
				} */
			}

		});

		a.mouseout(function(e) { 			
			iconClass = this.attr('class');

			for (var i = 0; i < infosAll.length; i++) {
				if (infosAll[i].attr('class') == iconClass) {
					infosAll[i].removeClass('check');
				}
			}
		});

	});

	// Stops pop-info circle animation on hover:
	infoText.mouseover(function(){
		infoPop.stop();
	}, function(){
		infoPulse();
	});

	infoPulse();

	// Infinite animation pop-info circle:
	function infoPulse() {
		infoPop.stop().animate({ r: 23 }, 1500, mina.elastic,
		
		function() { infoPop.attr({ r: 20.5 }); 
			infoPulse(); // Repeat this animation so it appears infinite.
		}, 200, mina.ease);
	}


	radioPoint();

	function radioPoint() {
		pointer.stop().animate({ 'transform' : 't415,1150' }, 1500, mina.elastic,
		
		function() { pointer.attr({ 'transform' : 't405,1150' });
			radioPoint(); // Repeat this animation so it appears infinite.
		}, 200, mina.ease);
	}

	s.append(mainGraph);
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
