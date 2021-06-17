// Original unordered band list
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to omit the articles (The or A or An) in band name
function sansArticle(name) {
	return name.replace(/The |A |An /,'');
};

// Sorts bands with an inner function to omit the articles and 
// not affecting the original String
var alphaBands = bands.sort(function(a,b){
	if (sansArticle(a) < sansArticle(b)) {
		return -1; // it sorts a before b
	} else {
		return 1;  // it sorts b before a
	}
});

const list = document.querySelector('#bands');

//alphaBands.forEach(band => list.innerHTML = `<li>${band}</li>`);

for (i in alphaBands){
	list.innerHTML += `<li>${alphaBands[i]}</li>`;
}