const slider = document.querySelector('.items');
// control variable to test if dragging option is available
var drag = false;
var  x1, x2, scrollLeft;

slider.onmousedown = function (e) {
	drag = true;
	slider.classList.add('active');
	x1 = e.pageX - slider.offsetLeft;
	console.log(x1);
}

slider.onmouseup = function (e) {
	drag = false;
	slider.classList.remove('active');
}

slider.onmousemove = function(e){
	if (drag) {
	x2 = e.pageX - slider.offsetLeft;
	var pace = (x2 - x1);
	slider.scrollLeft = slider.scrollLeft - pace;
	} else { return }
}
