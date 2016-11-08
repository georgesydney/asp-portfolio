$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger-navigation').slideToggle("slow", function(){
		});
	});

	$('.content').click(function(){

		if ($('.hamburger-navigation:visible')) {

			$('.hamburger-navigation').hide();

		} else {}

	});

	$('#colorway-1').on('click', function(){
		$('#tnc-logotype').attr('class', 'graphics-box margin-above colorway-1');
	});

	$('#colorway-2').on('click', function(){
		$('#tnc-logotype').attr('class', 'graphics-box margin-above colorway-2');
	});

	$('#colorway-3').on('click', function(){
		$('#tnc-logotype').attr('class', 'graphics-box margin-above colorway-3');
	});

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
	    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      		var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html, body').animate({
	          			scrollTop: target.offset().top
	        			}, 1000);
	        			return false;
	      		}
	    	}
	  	});
	});


});
