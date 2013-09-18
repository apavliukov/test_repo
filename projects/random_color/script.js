var RGBArray = [0, 0, 0];
var HEXArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
	for (var i in RGBArray) {
		RGBArray[i] = Math.floor(Math.random()*255);
	}
	var newColor = 'rgb(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color').html(newColor);
}

function convertDecToHex(number) {
	var mods = [];
	var result = 0;
	while (number > 0) {
		mods.push(number % 16);
		number = Math.floor(number / 16);
	}
	var len = mods.length;
	for (var i in mods) {
		var temp = mods[i];
		mods[i] = mods[len-i-1];
		mods[len-i-1] = temp;
	}
	console.log(mods);
}

function main() {
	changeColor();
	$('button').click(function() {
		changeColor();
	});
}