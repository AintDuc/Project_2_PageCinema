// Chuyển tab bán vé
// ct = content
var byCinema = document.getElementById("by-cinema");
var byFilm = document.getElementById("by-film");

var ctCinema = document.getElementById("ct-cinema");
var ctFilm = document.getElementById("ct-film");

// Khi ấn vào cái nào thì xuất hiện nội dung cái đó
byCinema.addEventListener("click", function(e) {
  ctFilm.style.display = "none";
  ctCinema.style.display = "block";
});
byFilm.addEventListener("click", function(e) {
  ctCinema.style.display = "none";
  ctFilm.style.display = "block";
});

// slider
var slides = document.getElementById("slides");
var slider = document.getElementsByClassName("slide");

// index slider
var sliderIndex = 0;
function showSlide() {
  for (i = 0; i < slider.length; i++) {
    // slider[i].style.display = "none";
    slider[i].style.opacity = "0";
  }
  slider[sliderIndex].style.display = "initial";
  slider[sliderIndex].style.opacity = "1";
}

showSlide();

function autoShow() {
  if (sliderIndex >= slider.length - 1) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  showSlide();
}

setInterval(autoShow, 2000);

// khuyến mãi slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// tab phim đang chiếu, phim sắp chiếu
var tabCurrentFilm = document.getElementById("tab-current-film");
var tabUpcommingFilm = document.getElementById("tab-upcomming-film");

var contentCurrentFilm = document.getElementById("content-current-film");
var contentUpcommingFilm = document.getElementById("content-upcoming-film");

console.log(tabUpcommingFilm);
contentUpcommingFilm.style.display = "none";

tabCurrentFilm.addEventListener("click", function(e) {
  contentUpcommingFilm.style.display = "none";
  contentCurrentFilm.style.display = "block";
});

tabUpcommingFilm.addEventListener("click", function(e) {
  contentCurrentFilm.style.display = "none";
  contentUpcommingFilm.style.display = "block";
});
