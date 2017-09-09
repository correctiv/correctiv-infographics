/* Load the Infographic */
var s = Snap("#snappy");

Snap.load("infographic1.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

	var spots = f.selectAll("*[id$='-graph'] > circle");

	spots.forEach( function(a) {

		a.mouseover(function(e) { 
			this.animate({ transform: 's1.66' }, 250, mina.ease);
		});

		a.mouseout(function(e) {
			this.animate({ transform: 's1' }, 250, mina.ease);
		});

	});









	var heat = f.select("#heat"),
		heatMask = f.select("#heat-mask");

	heat.attr({ mask: heatMask });

	function heatUp() {

		heat.stop().attr({ opacity : 1 }).animate({ transform: 't0,-100' }, 5000, mina.linear,
		function() { 
			this.attr({ opacity : 0, transform: 't0,0' });
		}, .2, mina.ease);
/*	*/
		heatMask.stop().animate({ transform: 't0,100' }, 5000, mina.linear,
		function() { 
			this.attr({ transform: 't0,0' }); 
			heatUp();
		}, .2, mina.ease);

	}
	heatUp();

	// All Snap appends:
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
