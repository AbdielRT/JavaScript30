const navBar = document.querySelector('#main');
const fijador = navBar.offsetTop;
const logo = document.querySelector('.logo');

window.onscroll = function (){
	if (window.scrollY >= fijador) {
		navBar.classList.add('barFixed');
		logo.style.maxWidth = '100%';
	} else {
		navBar.classList.remove('barFixed');
		logo.style.maxWidth = '0';
	}	
}
