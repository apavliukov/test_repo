var ColorArray = [0, 0, 0];
var HEXNumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor(colorType) {
	var newColor = "";
	for (var i in ColorArray) {
		ColorArray[i] = Math.floor(Math.random()*255);
	}
	if (colorType == 'rgb') {
		newColor = 'RGB(' + ColorArray[0] + ', ' + ColorArray[1] + ', ' + ColorArray[2] + ')';
	} else if (colorType == 'hex') {
		newColor = '#' + convertDecToHex(ColorArray[0]) + convertDecToHex(ColorArray[1]) + convertDecToHex(ColorArray[2]);
	}
	$('body').css('background-color', newColor);
	$('#color span').html(newColor);
}

/*function convertRGBColor(string) {
	var subString = string.split();
	console.log(subString);
}*/

function refreshSpan(colorType) {
	var currentColor = $('body').css('background-color');
	console.log(currentColor);
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
	if (number == 0) mods.unshift(0);
	while (number > 0) {
		mods.unshift(number % 16);
		number = Math.floor(number / 16);
	}
	for (var i in mods) {
		var pos = mods[i];
		result += HEXNumbersArray[pos];
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

function activeRadio() {
	return $('input:checked').val();
}

function main() {
	var colorChoice = activeRadio();
	changeColor(colorChoice);
	$('button').click(function() {
		changeColor(colorChoice);
	});
/*	$('input').click(function() {
		colorChoice = activeRadio();
	});*/
	//refreshSpan('hex');
	//convertRGBColor('rgb(62, 148, 39)');
}