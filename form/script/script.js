//drop down select
function dropSelectMenu(elementID){

	var id = '#' + elementID;
	//var clas = '.' + elementID;

	$(id + ' .selected-item').on('click', function() {
		$(id + ' .menu-items').toggle();
	});

	$(id + ' .menu-items a').on('click', function() {
		$(id + ' .selected-item').text(this.text);
		$('.menu-items').hide();
	});

	window.addEventListener('click', function(event) {
		if (document.getElementById(elementID) != null && !jQuery.contains(document.getElementById(elementID), event.target)) {
			 	$(id + ' .menu-items').hide();
		 }
	});
}

$().ready(function() {
	//run menu
	dropSelectMenu('user-type');
	dropSelectMenu('country');
	dropSelectMenu('region');
	dropSelectMenu('city');
})


function next() {
	if (validateMainInfo()) {
		window.location.href = 'location.html';
	}
}

function validateMainInfo() {
	let inputList = $('input[data-validation]').get()
	let error = false;
	for (let i in inputList) {
		if (inputList[i].value == '') {
			$(inputList[i]).parent('div').addClass('error');
			$(inputList[i]).bind('click', clearValidationMark);
			error = true;
		}
	}
	if (error) {
		$('ul.menu li.active').addClass('error');
		return false;
	} else {
		return true;
	}
}

function clearValidationMark() {
	$('ul.menu li.active').removeClass('error');
	$('input[data-validation]').each(function() { 
		$(this).parent('div').removeClass('error');
		$(this).unbind('click', clearValidationMark);
	});
}