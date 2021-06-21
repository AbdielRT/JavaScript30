const slider = document.querySelector('.items');

slider.onmousedown = function () {
	slider.classList.add('active');
}

slider.onmouseup = function () {
	slider.classList.remove('active');
}