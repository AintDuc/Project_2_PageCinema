let log = console.log;

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

// interval cái này
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
    768: {
      items: 4,
    },
    992: {
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
const col6Mobile = $(".nav-mobile-tab-content .col-6");
const nhan = $(".nhan");

const muave = $(".muave");
hambuger.click(() => {
  if (navMobile.hasClass("navMobileGoesIn")) {
    setTimeout(() => {
      navMobile.removeClass("navMobileGoesIn").removeClass("d-flex");
      navMobile.addClass("navMobileGoesOut").addClass("d-flex");
    }, 1500);

    setTimeout(() => {
      dongchay.removeClass("d-block").removeClass("dongChayChay");
      dongchay.addClass("d-block").addClass("dongChayBienMat");
    }, 500);

    // lặn xuống trước, dòng chảy biến mất sau, nhãn lặn xuống luôn

    /* col-6  */
    // các col6 đặc biệt như nhãn, mua vé đều lặn xuống khi tắt

    setTimeout(() => {
      //   col6Mobile.removeClass("colIn").addClass("colOut");
      // muave.removeClass("colIn").addClass("colOut");
      nhan.removeClass("colIn").addClass("colOut");
    }, 1000);
  } else if (navMobile.hasClass("navMobileGoesOut") || navMobile.hasClass("")) {
    navMobile.removeClass("navMobileGoesOut").removeClass("d-flex");
    navMobile.addClass("navMobileGoesIn").addClass("d-flex");

    // khi nav mới vào - dòng chảy chảy ra trước rồi tab ra sau

    setTimeout(() => {
      dongchay.addClass("d-block").addClass("dongChayChay");
    }, 700);

    setTimeout(() => {
      dongchay.removeClass("dongChayBienMat");

      nhan.removeClass("colOut").addClass("colIn");
    }, 1300);

    /* col-6  */
    // các col6 đặc biệt như nhãn, mua vé đều lặn xuống khi tắt
    setTimeout(() => {
      //   col6Mobile.removeClass("colOut").addClass("colIn");
      muave.removeClass("colOut").removeClass("colIn");
      nhan.removeClass("colOut").addClass("colIn");
    }, 2000);
  }
});

/* handle touch  */

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ); // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */

      /* khi vuốt lên thì trồi lên */

    //  log("upppp");
      nhan
        .removeClass("colOut")
        .removeClass("colIn")
        .removeClass("swipeDown1")

        .addClass("swipeUp1");

      muave.removeClass("swipeDown2").addClass("swipeUp2");
     // log(nhan);
    } else {
      /* down swipe */
    //  log("donwww");

      // Nếu chưa có class nào không cho add swipedown
      if (nhan.hasClass("swipeUp1")) {
        nhan
          .removeClass("colOut")
          .removeClass("colIn")
          .removeClass("swipeUp1")
          .addClass("swipeDown1");
        muave.removeClass("swipeUp2").addClass("swipeDown2");
      }
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}
