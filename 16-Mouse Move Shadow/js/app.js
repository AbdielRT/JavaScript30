// Retrieve containers of interest
const hero = document.querySelector('.hero');
const movable = document.querySelector('#movable');

// function deployed on mouse movement 
hero.onmousemove = function (e){
	// recentering pointer to movable container 
	// position, displaced by half
	var x = (e.pageX - movable.offsetLeft*1.7);
	var y = (e.pageY - movable.offsetTop*1.2);

// shadows to react to pointer position 
	movable.style.textShadow = `
		${x}px ${y}px 0 rgba(255,140,0,0.7),
		${-x}px ${y}px 0 rgba(255,20,147,0.7),
		${y}px ${x/hero.offsetWidth* hero.offsetHeight}px 0 rgba(32,178,170,0.7),
		${-y}px ${-x/hero.offsetWidth* hero.offsetHeight}px 0 rgba(60,179,113,0.7)`;
// Last 2 shadows normalize x-coordinate to the window height.
}