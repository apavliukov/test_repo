var RGBArray = [0, 0, 0];
var currentColor = $('body').css('background-color');

function changeColor() {
	for (var index in RGBArray) {
		RGBArray[index] = Math.floor(Math.random()*255);
	}
	var newColor = 'rgb(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color').html(newColor);
}

function main() {
	$('#color').html(currentColor);
	$('input').click(function() {
		changeColor();
	});
}