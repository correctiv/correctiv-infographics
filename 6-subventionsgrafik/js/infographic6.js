// Load the Infographic & fractions:
var s = Snap("#snappy");

Snap.load("infographic6.svg", function(f) {
	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

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
