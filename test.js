var rbgArray = [0, 0, 0];

function changeColor() {
	for (var index in rbgArray) {
		rgbArray[index] = Math.floor(Math.random()*255);
	}
	console.log(rgbArray);
}