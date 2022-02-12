//min slide show
var minSlideIndex = 0;
minShowSlides();

function minShowSlides() {
  var i;
  var minSlides = document.getElementsByClassName("myMinSlides");
  var dots = document.getElementsByClassName("minDot");
  for (i = 0; i < minSlides.length; i++) {
    minSlides[i].style.display = "none";
  }
  minSlideIndex++;
  if (minSlideIndex > minSlides.length) {
    minSlideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  minSlides[minSlideIndex - 1].style.display = "block";
  dots[minSlideIndex - 1].className += " active";
  setTimeout(minShowSlides, 5000); // Change image every 5 seconds
}
