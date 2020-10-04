$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:4000,
        pagination:false
    });
    var typed = new Typed(".typed", {
		strings: ["Aspiring Developer.", "Python Developer.", "Coding Enthusiast.","ECE Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

});