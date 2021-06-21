
function imgOnScroll() {
  const imgs = document.querySelectorAll('img');

  imgs.forEach(imagen => {
// scroll position to middle height of an image
    var midImage = window.scrollY + window.innerHeight - (imagen.height / 2);
// verifies if an image top has surpassed the scroll position midImage  
    if (midImage > imagen.offsetTop ){
// if so, includes active class to slide in image.
      imagen.classList.add('active');
    } else {
// removes the image when scroll back up
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