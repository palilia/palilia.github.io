
var w = $(window).width();

$('.main-wrapper').mousemove(function(e){
	var offsetX =(($(window).width() / 2) - e.pageX) * 0.1;
	var offsetY =(($(window).height() / 2) - e.pageY) * 0.1;
	$('.least').css('margin-right', offsetX + 'px');
	$('.least').css('margin-top', offsetY + 'px');
});

$('.main-wrapper').mousemove(function(e){
	var offsetX =(($(window).width() / 12) - e.pageX) * 0.1;
	var offsetY =(($(window).height() / 12) - e.pageY) * 0.1;
	$('.least2').css('margin-left', offsetX + 'px');
	$('.least2').css('margin-top', offsetY + 'px');
});

$('.main-wrapper').mousemove(function(e){
	var offsetX =(($(window).width() / 2) - e.pageX) * 0.2;
	var offsetY =(($(window).height() / 2) - e.pageY) * 0.1;
	$('.dub').css('margin-left', offsetX + 'px');
	$('.dub').css('margin-bottom', offsetY + 'px');
});