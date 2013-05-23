$(document).ready(function() {
	
	$('#git').mouseover (function(){
		increaseOpacity($('#git'));
	});
	
	$('#git').mouseleave(function() {
		decreaseOpacity($('#git'));
	});
	
	$('#behance').mouseover (function(){
		increaseOpacity($('#behance'));
	});
	
	$('#behance').mouseleave(function() {
		decreaseOpacity($('#behance'));
	});
	
	$('#resume').mouseover (function(){
		increaseOpacity($('#resume'));
	});
	
	$('#resume').mouseleave(function() {
		decreaseOpacity($('#resume'));
	});
	
	$('#blog').mouseover (function(){
		increaseOpacity($('#blog'));
	});
	
	$('#blog').mouseleave(function() {
		decreaseOpacity($('#blog'));
	});
	
	$('#charitywater').mouseover (function(){
		increaseOpacity($('#charitywater'));
	});
	
	$('#charitywater').mouseleave(function() {
		decreaseOpacity($('#charitywater'));
	});
	
	function increaseOpacity(object) {
		object.animate ({opacity: '1.0'}, 500);
	};
	
	function decreaseOpacity(object) {
		object.animate({opacity: '0.75'}, 500);
	};
	
});
