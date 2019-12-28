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
