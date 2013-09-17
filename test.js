function test() {
	alert('script is ok!');
	var currentColor = $('body').css('background-color');
	$('#button p span').html(currentColor);
}