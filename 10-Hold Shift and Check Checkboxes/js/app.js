// Retrieve all checkboxes from html
const boxes = document.querySelectorAll('input[type="checkbox"]');

// calls handleCheck when a checkbox is clicked
boxes.forEach(box => box.onclick = handleCheck);
// initiliase variable to store last checked box
var previousChecked;

function handleCheck(e){
// Once a box has been checked, verifies if shift key is pressed. 
	if (e.shiftKey) {
// Initialise control variable for in-between boxes.
		let selectBetween = false;
// Loops through the boxes...
		boxes.forEach(box => {
// to identify the previous and current checked boxes 
			if (box === previousChecked || box === this){
// and sets its control variable to TRUE if in-between
				selectBetween = !selectBetween;
			}
// Checks up boxes which selectBetween was switched to TRUE
			if (selectBetween){ box.checked = true};
		})
	}
// Sets last checked box to the current selected
	previousChecked = this;
}