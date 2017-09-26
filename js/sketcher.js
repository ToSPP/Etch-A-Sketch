var size = 16;
function fillField(size) {
	for(var i = 1; i <= Math.pow(size, 2); i++) {
		$('.gameField').append('<div class="pixel"></div>');
		var pixelSize = 600 / size;
		$('.pixel').css({'width': pixelSize, 'height': pixelSize});
	}
	
}
fillField(size);

$(function() {
	$('.pixel').mouseenter(function() {
		$(this).addClass('fill');
	})
})


