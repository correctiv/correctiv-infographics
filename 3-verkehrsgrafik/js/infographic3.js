// Load the Infographic & fractions:
var s = Snap("#snappy");

Snap.load("infographic3.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

	// All those parts will be appended separately for functionality:
	var factSpot1 = f.select("#fact-spot1"); 
	var factSpot2 = f.select("#fact-spot2");
	var factSpot3 = f.select("#fact-spot3");

	var factTxt1 = f.select("#fact-txt1");
	var factTxt2 = f.select("#fact-txt2");
	var factTxt3 = f.select("#fact-txt3");

	//Redraw the boxes:
	var factBox1 = s.rect(96.5, 358, 390, 0, 10);
	factBox1.attr({ fill:'url(#grad-frame1)', stroke:'#1B7A88', strokeWidth:2, strokeMiterlimit:10, opacity:0 });

	var factBox2 = s.rect(510, 308, 390, 0, 10);
	factBox2.attr({ fill:'url(#grad-frame2)', stroke:'#1B7A88', strokeWidth:2, strokeMiterlimit:10, opacity:0 });

	var factBox3 = s.rect(420, 535, 0, 370, 10);
	factBox3.attr({ fill:'url(#grad-frame3)', stroke:'#1B7A88', strokeWidth:2, strokeMiterlimit:10, opacity:0 });

	var factSpots = f.selectAll("*[id^='fact-spot']");
	
	factSpots.forEach( function(a) {
		a.click(function(e) {

			if (this.hasClass('clicked') != 1) {
				this.addClass('clicked');

				if (this.attr('id') == 'fact-spot1') {
					factBox1.animate({ height: 315, opacity:1 }, 500, mina.ease);
				} else if (this.attr('id') == 'fact-spot2') {
					factBox2.animate({ height: 355, opacity:1 }, 500, mina.ease);
				} else {
					factBox3.animate({ width: 480, opacity:1 }, 500, mina.ease);
				}
			}

			else {
				this.removeClass('clicked');

					if (this.attr('id') == 'fact-spot1') {
						setTimeout(function() {
							factBox1.animate({ height: 0, opacity:0 }, 500, mina.ease);
						}, 250);
					} else if (this.attr('id') == 'fact-spot2') {
						setTimeout(function() {
							factBox2.animate({ height: 0, opacity:0 }, 500, mina.ease);
						}, 250);
					} else {
						setTimeout(function() {
							factBox3.animate({ width: 0, opacity:0 }, 500, mina.ease);
						}, 250);
					}
			}

		});
	});

	function factPulse() {
		spotProcessed = 0;

		factSpots.forEach( function(e) {
			circleBg = e.select('circle:first-child');
			circleFg = e.select('circle:nth-child(2)');

			circleBg.stop().animate({ r: 32.5 }, 1500, mina.elastic,

			function() { 
				var clicked = this.parent().hasClass('clicked');
				spotProcessed++;

				if (!clicked) {
					this.attr({ r: 27.5 }); 
				}

				if (spotProcessed == 3) {
					factPulse();
				}

			}, 200, mina.ease);
		});
	}
	factPulse();


	// nbrs in bubbles on the 2 main graphs:
	var bubbles = f.selectAll("*[id$=-graph] .bubble");

	var nbrs = f.selectAll("*[id$=-graph] .nbr");
	nbrs.forEach(function(el) {	// Push all nbrs 15px down
		el.transform('t0,15');
	});

	bubbles.forEach( function(a) {

		a.mouseover(function(e) {
			this.addClass('check');
			var circle = this.select('circle');

			circle.animate({ r:25 }, 150, mina.ease);

		});

		a.mouseout(function(e) { 
			this.removeClass('check');
			var circle = this.select('circle');

			circle.animate({ r: 5 }, 150, mina.ease);

		});

	});


	s.append(mainGraph);

	s.append(factSpot1);
	s.append(factBox1);
	s.append(factTxt1);

	s.append(factSpot2);
	s.append(factBox2);
	s.append(factTxt2);

	s.append(factSpot3);
	s.append(factBox3);
	s.append(factTxt3);
	
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
