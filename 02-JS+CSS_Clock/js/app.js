// Evaluate function every second
setInterval(function(){
// Retrieve current full date
	var date = new Date();

// and stock it in separate variables for hh:mm:ss 
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
// Adds to the css the transformation rotate, adjusted for the 
// corresponding degrees depending on hours, minutes and secs.

// Version with hour hand fixed in current hour position the whole hour
//	$('.hour-hand').css({'transform':`rotate(${hh * 30 + 90}deg)`});

// Reproduces mechanical clock hour hand 
	$('.hour-hand').css({'transform':`rotate(${hh * 30 + 90 + mm/2}deg)`});

	$('.min-hand').css({'transform':`rotate(${mm * 6 + 90}deg)`});
	$('.second-hand').css({'transform':`rotate(${ss * 6 + 90}deg)`});
}, 1000);
