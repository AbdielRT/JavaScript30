// Failed approach with JQuery
// $('.panel').click(function(e){
// 	$(this).css({'flex-grow':'6'});
// 	$(':nth-child(odd)',this).css({'transform':'translateY(0)'});
// });

var panels = document.querySelectorAll('.panel');

panels.forEach( panel =>
	panel.onclick = function(){
		panel.classList.toggle('open');
		panel.children[0].classList.toggle('shows');
		panel.children[2].classList.toggle('shows');
})


