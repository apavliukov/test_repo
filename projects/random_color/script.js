var ColorArray = [0, 0, 0];
var HEXNumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function changeColor(colorType) {
	var newColor = '';
	for(var i in ColorArray) {
		ColorArray[i] = Math.floor(Math.random()*255);
	}
	newColor = makeColor(ColorArray, 'rgb');
	if(colorType == 'hex') {
		newColor = convertColor(newColor, 'hex');
	}
	$('body').css('background-color', newColor);
	$('#color span').html(newColor);
}

function makeColor(array, mode) {
	var colorString = '';
	var len = array.length;
	if(mode == 'rgb') {
		colorString += 'RGB(';
		for(var i in array) {
			colorString += array[i];
			i < len - 1 ? colorString += ', ' : colorString += ')';
		}
	} else if(mode == 'hex') {
		colorString += '#';
		for(var i in array) {
			colorString += array[i];
		}
	}
	return colorString;
}

function convertColor(string, mode) {
	var colorNumbers = [];
	var resultColor = '';
	if(mode == 'hex') {
		colorNumbers = string.match(/\d+/g);
		for(var i in colorNumbers) {
			colorNumbers[i] = convertDecToHex(colorNumbers[i]);
		}
		resultColor = makeColor(colorNumbers, 'hex');
	} else if(mode == 'rgb') {
		for(var i = 1; i < string.length; i += 2) {
			var part = convertHexToDec(string.substring(i, i+2));
			colorNumbers.push(part);
		}
		resultColor = makeColor(colorNumbers, 'rgb');
	}
	return resultColor;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function HEXNumbers(string) {
	if(isNumber(string)) return string;
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
	var result = '';
	mods.push(number % 16);
	number = Math.floor(number / 16);
	if(number == 0) mods.unshift(0);
	while(number > 0) {
		mods.unshift(number % 16);
		number = Math.floor(number / 16);
	}
	for(var i in mods) {
		var pos = mods[i];
		result += HEXNumbersArray[pos];
	}
	return result;
}

function convertHexToDec(string) {
	var result = 0;
	var len = string.length;
	var chr;
	for(var i = 0; i < len; i++) {
		chr = string.charAt(i);
		result += Math.pow(16, len-i-1) * HEXNumbers(chr);
	}
	return result;
}

function activeRadio() {
	return $('input:checked').val();
}

function refreshSpan(colorType) {
	var currentColor = $('body').css('background-color');
	var newColor = '';
	hexedColor = convertColor(currentColor, 'hex');
	if(colorType == 'rgb') {
		newColor = convertColor(hexedColor, 'rgb');
	} else if(colorType == 'hex') {
		newColor = hexedColor;
	}
	$('#color span').html(newColor);
}

function main() {
	var colorChoice = activeRadio();
	changeColor(colorChoice);
	$('button').click(function() {
		changeColor(colorChoice);
	});
	$('input').click(function() {
		colorChoice = activeRadio();
		refreshSpan(colorChoice);
	});
}