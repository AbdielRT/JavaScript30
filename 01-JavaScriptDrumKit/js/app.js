// Initialise event on pressing a key for the html document
document.onkeydown = function (event){
// Retrieves the key div elements with the ID from keydown
	var tecla = document.querySelector(`div#${event.key}`);
// Adds .playing class to the corresponding div 
	tecla.classList.add('playing');
	
// Retrieves audio file for corresponding key ID
	var son = document.querySelector(`audio#${event.key}`);
// Plays audio file
	son.play();

// Prepares an array of all key divs
	var teclado = document.querySelectorAll(`.key`);

	for (i in teclado) {
// For every element div.key checks if a CSS transition has ended
		teclado[i].ontransitionend = function (e){
// Once the transform has been applied...
			if (e.propertyName === 'transform') {
// then removes .playing class to restore button to initial state. 
				this.classList.remove('playing');	
			}
		}
	}
}