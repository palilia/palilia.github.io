
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


document.onmousemove = animateC;

var colors = ['#ccc', '#6cf', 'eaba13a'];

function animateC (e) {
	var circle = document.createElement('div');
	circle.setAttribute('class', 'circle');
	document.body.appendChild(circle);

	circle.style.left = e.clientX + 'px';
	circle.style.top = e.clientY + 'px';

	var color = colors[Math.floor(Math.random() * colors.length)];
	circle.style.borderColor = colors;

	circle.style.transition = 'all 0.5s linear 0s';

	circle.style.left = circle.offsetLeft - 20 + 'px';
	circle.style.top = circle.offsetTop - 20 + 'px';


	circle.style.width = '50px';
	circle.style.height = '50px';
	circle.style.borderWidth = '5px';
	circle.style.opacity = 0;

}