const slider = document.querySelector('.items');
var drag = false;  // control variable to test if drag mode is active
var  x1, x2;

// As mouse clicks, sets drag variable to true, adds class active for the
// css effects and saves horizontal position of click 
slider.onmousedown = function (e) {
	drag = true;
	slider.classList.add('active');
	x1 = e.pageX;
}
// On mouse click release, returns drag to false and removes css effects
slider.onmouseup = function (e) {
	drag = false;
	slider.classList.remove('active');
}

// As mouse moves and...
slider.onmousemove = function(e){
// mouse click is pressed:	
	if (drag) {
// saves current mouse position 
	x2 = e.pageX;
// computes position relative to initial click
	var delta = (x2 - x1);
// scrolls horizontally by the delta of clicks position in pixels
	slider.scrollLeft = slider.scrollLeft - delta;
	console.log(delta, slider.scrollLeft);
	} else { return }
}
