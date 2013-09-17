var RGBArray = [0, 0, 0];

function changeColor() {
	for (var index in RGBArray) {
		RGBArray[index] = Math.floor(Math.random()*255);
	}
	console.log(RGBArray);
}