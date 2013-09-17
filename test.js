function test() {
	alert('script is ok!');
	var currentColor = $('body').css('background-color');
	console.log(currentColor);
	$('span').html(currentColor);
}