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
 
/* js kode kode starter https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_multiple 5.juni.2022 */ 

let slideIndex = [1,1];
let slideId = ["kagetapas", "festkager"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
/*  <!-- js kode på kager side slutter  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_multiple 5.juni.2022 -->*/