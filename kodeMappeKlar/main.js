var lagkage = document.getElementById("navigation");

function lagkageFunktion() {
    if (lagkage.style.display === "block") {
      lagkage.style.display = "none";
    } else {
        lagkage.style.display = "block"
    }
  }

/* js kode på kager side starter https://www.w3schools.com/howto/howto_js_slideshow.asp  4.juni.2022 */ 

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
/*  <!-- js kode på kager side slutter https://www.w3schools.com/howto/howto_js_slideshow.asp  4.juni.2022 -->*/