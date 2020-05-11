// Chuyển tab bán vé
// ct = content
var byCinema = document.getElementById("by-cinema");
var byFilm = document.getElementById("by-film");

var ctCinema = document.getElementById("ct-cinema");
var ctFilm = document.getElementById("ct-film");

// Khi ấn vào cái nào thì xuất hiện nội dung cái đó
byCinema.addEventListener("click", function (e) {
  ctFilm.style.display = "none";
  ctCinema.style.display = "flex";

  $(ctCinema).addClass("d-flex flex-column flex-around form-control");
  $(ctFilm).removeClass();
});
byFilm.addEventListener("click", function (e) {
  ctCinema.style.display = "none";
  ctFilm.style.display = "flex";

  $(ctCinema).removeClass();
  $(ctFilm).addClass("d-flex flex-column flex-around form-control");
});

// mua vé, chuyển đổi màu
var h1TabCinema = $("#by-cinema").children();
var h1TabFilm = $("#by-film").children();

h1TabCinema.click(function () {
  $(this).addClass("tabChange-1");
  h1TabFilm.removeClass("tabChange-2");
});
h1TabFilm.click(function () {
  $(this).addClass("tabChange-2");
  h1TabCinema.removeClass("tabChange-1");
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
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// tab phim đang chiếu, phim sắp chiếu
var tabCurrentFilm = document.getElementById("tab-current-film");
var tabUpcommingFilm = document.getElementById("tab-upcomming-film");

var contentCurrentFilm = document.getElementById("content-current-film");
var contentUpcommingFilm = document.getElementById("content-upcoming-film");

var h3TabCurrentFilm = $("#tab-current-film").children();
var h3TabUpcommingFilm = $("#tab-upcomming-film").children();

// khi tab này click thì có màu, tab còn lại không màu
h3TabCurrentFilm.click(function () {
  console.log("okee");
  $(this).addClass("movieTabCurrent");
  $(h3TabUpcommingFilm).removeClass("movieTabCurrent");
});
h3TabUpcommingFilm.click(function () {
  console.log("da lick");
  $(this).addClass("movieTabCurrent");
  $(h3TabCurrentFilm).removeClass("movieTabCurrent");
});

contentUpcommingFilm.style.display = "none";

tabCurrentFilm.addEventListener("click", function (e) {
  contentUpcommingFilm.style.display = "none";
  contentCurrentFilm.style.display = "block";
});

tabUpcommingFilm.addEventListener("click", function (e) {
  contentCurrentFilm.style.display = "none";
  contentUpcommingFilm.style.display = "block";
});

/*  nav mobile handle */

$(".hamburger").click(function () {
  $(this).toggleClass("is-active");
});

const hambuger = $(".hamburger");
const navMobile = $("#nav-mobile");
const dongchay = $(".dongchay");
const colMobile = $(".nav-mobile-tab-content .col");
const nhan = $(".nhan");
hambuger.click(() => {
  if (navMobile.hasClass("navMobileGoesIn")) {
    setTimeout(() => {
      navMobile.removeClass("navMobileGoesIn").removeClass("d-flex");
      navMobile.addClass("navMobileGoesOut").addClass("d-flex");
    }, 1300);

    setTimeout(() => {
      dongchay.removeClass("d-block").removeClass("dongChayChay");
      dongchay.addClass("d-block").addClass("dongChayBienMat");
    }, 500);

    // lặn xuống trước, dòng chảy biến mất sau, nhãn lặn xuống luôn
    colMobile.removeClass("colIn").addClass("colOut");
    nhan.removeClass("colIn").addClass("colOut");
  } else if (navMobile.hasClass("navMobileGoesOut") || navMobile.hasClass("")) {
    navMobile.removeClass("navMobileGoesOut").removeClass("d-flex");
    navMobile.addClass("navMobileGoesIn").addClass("d-flex");

    // khi nav mới vào - dòng chảy chảy ra trước rồi tab ra sau
    setTimeout(() => {
      dongchay.removeClass("dongChayBienMat");
      dongchay.addClass("d-block").addClass("dongChayChay");
      nhan.removeClass("colOut").addClass("colIn");
    }, 1000);

    setTimeout(() => {
      colMobile.removeClass("colOut").addClass("colIn");
    }, 2000);
  }
});
