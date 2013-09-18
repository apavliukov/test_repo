var RGBArray = [0, 0, 0];

function changeColor() {
	for (var index in RGBArray) {
		RGBArray[index] = Math.floor(Math.random()*255);
	}
	var newColor = 'rgb(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color').html(newColor);
}

function isInteger(num) {
  return (num ^ 0) === num;
}

function convertNumber(number, systemTo) {
	var mods = [];
	var result = 0;
	while (number > 0) {
		mods.push(number % systemTo);
		number = Math.floor(number / 16);
	}
	console.log(mods);
}

function main() {
	changeColor();
	$('button').click(function() {
		changeColor();
	});
	convertNumber(255, 16);
}