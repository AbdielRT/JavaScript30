const motPasse = 'unicornio';
// initiliase empty array
var attemps = [];

// add event listener on a key press
document.onkeydown = function (e){
	// adds the key output to the array
	attemps.push(e.key);
	// shows dynamic array as a key is pressed
	console.log(attemps);

	// Once the length of the attemps array matches the length of the password
	while (attemps.length >= motPasse.length){
		// verifies is the password has been decoded
		if (attemps.join('') == motPasse){
			cornify_add(); // then displays unicorns
			console.log('You got it!');
		}
		// otherwise, it displaces the first element in the array to receive a 
		// new one in the last entry.
		attemps.splice(0,1).push(e.key);	
	}

}