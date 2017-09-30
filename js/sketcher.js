var startSize = 16;
var color = '#000';
var rndColor = 0;
var shdColor = 0;
var opacity;
var fillPerm = 'on';

function fillField(size) {
	for(var i = 1; i <= Math.pow(size, 2); i++) {
		$('.gameField').append('<div class="pixel" style="width: ' 
			+ 520 / size + 'px; height: ' + 520 / size + 'px;"></div>');
	}	
}

function generateRandomColor() {
	var red = Math.floor(Math.random() * 255) + 1;
	var green = Math.floor(Math.random() * 255) + 1;
	var blue = Math.floor(Math.random() * 255) + 1;
	color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';	
	return color;
}

function viewColorPicker() {
	if($('.colorPicker').hasClass('visible')) {
		$('.colorPicker').removeClass('visible')
	} else {
		$('.colorPicker').addClass('visible');
		$('.colors').on('click', 'a', function() {
			color = $(this).css('background-color');
			$('.colorPicker').removeClass('visible');
		})
		rndColor = 0;	
		shdColor = 0;
	}
	return false;
}

function clearField() {
	var newSize;
	if($('.colorPicker').hasClass('visible')) $('.colorPicker').removeClass('visible');
	while(isNaN(newSize) || newSize > 100) {
		newSize = +prompt('Set the field size (1 - 100):', 16);
		newSize = parseInt(newSize, 10);
	}
	if(newSize != 0) {
	$('.pixel').remove();
	fillField(newSize);
	fillPixel();
	} 
	return false;
}

function fillPixel() {
	$('.pixel').mouseenter(function() {
		if(fillPerm === 'on') {
		if(rndColor === 1) {
				$(this).css({'background': generateRandomColor(), 'opacity': 1});
			} else if(shdColor === 1) {
				opacity = getComputedStyle(this).getPropertyValue('opacity');
				$(this).css('opacity', opacity > 0 ? opacity - 0.1 : 0);
			} else {
				$(this).css({'background': color, 'opacity': 1});
			}
		}
	})
	 
}

function fillPermission() {
	$(this).keydown(function(event) {
		if(event.keyCode === 68) fillPerm === 'on' ? fillPerm = 'off' : fillPerm = 'on'	
			console.log(fillPerm);
	})
}

fillField(startSize);
fillPixel();
fillPermission();