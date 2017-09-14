// Load the Infographic
var s = Snap("#snappy");

Snap.load("infographic5.svg", function(f) {

	var mainGraph = f.select("#main-svg"); // "main-svg" will be appended

	s.append(mainGraph);
});
