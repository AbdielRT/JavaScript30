const motPasse = 'unicornio';
var attemps = [];

document.onkeydown = function (e){
	attemps.push(e.key);
	console.log(attemps);

	while (attemps.length >= motPasse.length){
		
		if (attemps.join('') == motPasse){
			cornify_add();
			console.log('You got it!');
		}
		attemps.splice(0,1).push(e.key);		
	}

}