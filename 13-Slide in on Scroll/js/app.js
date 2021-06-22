
function imgOnScroll() {
  const imgs = document.querySelectorAll('img');

  imgs.forEach(imagen => {
// scroll position to middle height of an image
    var scrollToMidImage = window.scrollY + window.innerHeight - (imagen.height*0.5);
// computes position at image bottom
    var bottomImage = imagen.offsetTop + imagen.height*0.2;
// verifies if an image is in viewport
    if (scrollToMidImage > imagen.offsetTop && window.scrollY < bottomImage){
// if so, includes active class to slide in the image.
      imagen.classList.add('active');
    } else {
// slides out image if it is about to go out of viewport
      imagen.classList.remove('active');
    }
  });
}

// Listen to event scroll and calling imgOnScroll function monitored 
// by debounce function.
window.onscroll = debounce(imgOnScroll);

// Given function to reduce event surveillance
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }