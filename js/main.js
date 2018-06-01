$(document).ready(function(){
	var screenheight= $( window ).height();
	console.log(screenheight);
	$('#projects').css({'height': screenheight + 'px'});
});
