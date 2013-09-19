var RGBArray = [0, 0, 0];
var HEXArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor() {
	for (var i in RGBArray) {
		RGBArray[i] = Math.floor(Math.random()*255);
	}
	var newColor = 'RGB(' + RGBArray[0] + ', ' + RGBArray[1] + ', ' + RGBArray[2] + ')';
	$('body').css('background-color', newColor);
	$('#color span').html(newColor);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function HEXNumbers(string) {
	if (isNumber(string)) return string;
	else {
		switch(string) {
			case 'A' : 
				return 10;
			case 'B' : 
				return 11;
			case 'C' : 
				return 12;
			case 'D' :
				return 13;
			case 'E' : 
				return 14;
			case 'F' : 
				return 15;	
		}
	}
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
		var pos = mods[i];
		result += HEXArray[pos];
	}
	return result;
}

function convertHexToDec(string) {
	var result = 0;
	var len = string.length;
	var chr;
	for (var i = 0; i < len; i++) {
		chr = string.charAt(i);
		result += Math.pow(16, len-i-1) * HEXNumbers(chr);
	}
	return result;
}

function main() {
	changeColor();
	$('button').click(function() {
		changeColor();
	});
}