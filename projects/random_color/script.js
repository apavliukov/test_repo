var RGBArray = [0, 0, 0];
var HEXArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
	for (var i in RGBArray) {
		RGBArray[i] = Math.floor(Math.random()*255);
	}
	var newColor = 'rgb(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color').append($('<span />').html(newColor));
}

function convertDecToHex(number) {
	var mods = [];
	var result = "";
	mods.push(number % 16);
	number = Math.floor(number / 16);
	while (number > 0) {
		mods.unshift(number % 16);
		number = Math.floor(number / 16);
	}
	for (var i in mods) {
		result += HEXArray[mods[i]];
	}
	return result;
}

function main() {
	changeColor();
	$('button').click(function() {
		changeColor();
	});
	convertDecToHex(255, 16);
}