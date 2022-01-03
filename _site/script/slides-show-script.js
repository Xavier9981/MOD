
//main slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 15000); // Change image every 15 seconds
}  

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
  if (minSlideIndex > minSlides.length) {minSlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  minSlides[minSlideIndex-1].style.display = "block";  
  dots[minSlideIndex-1].className += " active";
  setTimeout(minShowSlides, 5000); // Change image every 5 seconds
}