// Load the Infographic & fractions:
var s = Snap("#snappy");

Snap.load("infographic6.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

	var arms = f.select("#arms");
	arms.attr({ transform: 'r-1.5,500,900' });

	var pileL = f.select("#pile-left");
	pileL.attr({ transform: 't0,7' });

	var pileR = f.select("#pile-right");
	pileR.attr({ transform: 't0,-7' });

	var lineL = f.select("#txt-left .line-under");
	lineLy = lineL.attr('y1');

	var lineR = f.select("#txt-right .line-under");
	lineRy = lineR.attr('y1');
	lineR.attr({ y1 : lineRy - 16 });

	var indicator = f.select("#indicator");
	indicator.attr({ transform: 'r-23,500,678.8' });




	// animation:
	function moveArms() {
		arms.stop().animate({ transform: 'r1.5,500,900' }, 4000, mina.ease);
		pileL.stop().animate({ transform: 't0,-7' }, 4000, mina.ease);
		pileR.stop().animate({ transform: 't0,7' }, 4000, mina.ease);
		lineL.stop().animate({ y1 : lineLy -16 }, 4000, mina.ease);
		lineR.stop().animate({ y1 : lineRy }, 4000, mina.ease);
		indicator.stop().animate({ transform: 'r-30,500,678.8' }, 4000, mina.ease);
		
		setTimeout(function() { 
			arms.animate({ transform: 'r-1.5,500,900' }, 4000, mina.ease);
			pileL.animate({ transform: 't0,7' }, 4000, mina.ease);
			pileR.animate({ transform: 't0,-7' }, 4000, mina.ease);
			lineL.animate({ y1 : lineLy }, 4000, mina.ease);
			lineR.animate({ y1 : lineRy -16 }, 4000, mina.ease);
			indicator.animate({ transform: 'r-23,500,678.8' }, 4000, mina.ease);

			setTimeout(function() {
				moveArms();
			}, 4000);
			
		}, 4000);
	}
	moveArms();


/*
	function moveArms() {
		arms.stop().animate({ transform: 'r1.5,500,900' }, 3000, mina.ease,
		
		function() { 
			arms.animate({ transform: 'r-1.5,500,900' }, 3000, mina.ease);

			moveArms();
		
		}, 3000, mina.ease);
	}
	moveArms();

*/








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
