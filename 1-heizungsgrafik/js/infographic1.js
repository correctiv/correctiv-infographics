/* Load the Infographic */

var s = Snap("#snappy");
Snap.load("infographic1.svg", onSVGLoaded);

function onSVGLoaded(data) {
	mainGraph = data.select("#main-svg");
	s.append(mainGraph);
}

/* Add sound */
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


/* Anim the Heat 


console.log("selectAll: ", Snap.selectAll('.st24, .st25, .st26'));

var grabLink = Snap.select('#heat'),
    grabPathRectangles = Snap.selectAll('.st24, .st25, .st26');

function colorPathRectangles(){
  grabPathRectangles.animate({fill: 'red'}, 1000, mina.ease);
} 
function resumePathRectangles(){
  grabPathRectangles.animate({fill: 'green'}, 1000, mina.ease);
}   

grabLink.hover(colorPathRectangles, resumePathRectangles);



var s = Snap("#svg");
var g = s.group();


var radiaTop = Snap.load("infographic1.svg", function (f) {
	g.append(f.select("#heat"));
	g.attr({ opacity: '0.5'});
});


var heatLength = heat.getTotalLength();
heat.attr({ strokeDasharray: heatLength + ' ' + heatLength })

Snap.animate(heatLength*2, heatLength, function(val) {
    heat.attr({
        strokeDashoffset: val  });
}, 4000, mina.ease);



var s = Snap("#svg");
var g = s.group();


$(document).ready(function () {
    $("#oil-badge").hover(function () {
        $("#oil-nbr-1").css("opacity", "0.5");
    });
    $("#oil-badge").mouseleave(function () {
        $("#oil-nbr-1").css("opacity", "1");
    });
});
*/