var lagkage = document.getElementById("navigation");
var luk = document.getElementById("luk");

function lagkageFunktion() {
    if (lagkage.style.display === "block") {
      lagkage.style.display = "none",luk.style.display = "none";
    } else {
        lagkage.style.display = "block",luk.style.display = "block";
    }
  }

  var mobil = document.getElementById("mobil-info")

  function infoFunktion() {
    if (mobil.style.display === "block") {
      mobil.style.display = "none";
    } else {
      mobil.style.display = "block",lokation.style.display = "none";
    }
  }

  var lokation = document.getElementById("lokation")

  function  adresseFunktion() {
    if (lokation.style.display === "block") {
      lokation.style.display = "none";
    } else {
      lokation.style.display = "block",mobil.style.display = "none";
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