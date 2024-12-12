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

function openForm() {
  document.getElementById("accessibility-popup").style.display = "block";
}

function closeForm() {
  document.getElementById("accessibility-popup").style.display = "none";
}

let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

let shortLang = lang;
if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];

console.log(lang, shortLang);

function myFunction() {
  document.getElementById("myClickdrop").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("clickdrop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showoptions() {
  var x = document.getElementById("selection1", "selection2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// Will be used for car color picker
// let root = document.documentElement;
// let carWrap = document.getElementById('car-wrap');
// let colorPicker = document.getElementById('color-picker');

// colorPicker.addEventListener('change', function(e){
// 	root.style.setProperty('--car-color', this.value);
// });

