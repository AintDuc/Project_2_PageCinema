// owl carousel JS

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
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

// tạo ghế

var totalSeats = 80;

var JSData = `[{"id":0,"name":"Ghe0","price":100,"booked":true},{"id":1,"name":"Ghe1","price":100,"booked":true},{"id":2,"name":"Ghe2","price":100,"booked":true},{"id":3,"name":"Ghe3","price":100,"booked":false},{"id":4,"name":"Ghe4","price":100,"booked":false},{"id":5,"name":"Ghe5","price":100,"booked":true},{"id":6,"name":"Ghe6","price":100,"booked":true},{"id":7,"name":"Ghe7","price":100,"booked":true},{"id":8,"name":"Ghe8","price":100,"booked":true},{"id":9,"name":"Ghe9","price":100,"booked":false},{"id":10,"name":"Ghe10","price":100,"booked":true},{"id":11,"name":"Ghe11","price":100,"booked":true},{"id":12,"name":"Ghe12","price":100,"booked":false},{"id":13,"name":"Ghe13","price":100,"booked":true},{"id":14,"name":"Ghe14","price":100,"booked":true},{"id":15,"name":"Ghe15","price":100,"booked":false},{"id":16,"name":"Ghe16","price":100,"booked":false},{"id":17,"name":"Ghe17","price":100,"booked":false},{"id":18,"name":"Ghe18","price":100,"booked":false},{"id":19,"name":"Ghe19","price":100,"booked":true},{"id":20,"name":"Ghe20","price":100,"booked":false},{"id":21,"name":"Ghe21","price":100,"booked":true},{"id":22,"name":"Ghe22","price":100,"booked":false},{"id":23,"name":"Ghe23","price":100,"booked":true},{"id":24,"name":"Ghe24","price":100,"booked":true},{"id":25,"name":"Ghe25","price":100,"booked":true},{"id":26,"name":"Ghe26","price":100,"booked":false},{"id":27,"name":"Ghe27","price":100,"booked":false},{"id":28,"name":"Ghe28","price":100,"booked":true},{"id":29,"name":"Ghe29","price":100,"booked":true},{"id":30,"name":"Ghe30","price":100,"booked":true},{"id":31,"name":"Ghe31","price":100,"booked":true},{"id":32,"name":"Ghe32","price":100,"booked":false},{"id":33,"name":"Ghe33","price":100,"booked":true},{"id":34,"name":"Ghe34","price":100,"booked":false},{"id":35,"name":"Ghe35","price":100,"booked":false},{"id":36,"name":"Ghe36","price":100,"booked":false},{"id":37,"name":"Ghe37","price":100,"booked":false},{"id":38,"name":"Ghe38","price":100,"booked":true},{"id":39,"name":"Ghe39","price":100,"booked":true},{"id":40,"name":"Ghe40","price":100,"booked":true},{"id":41,"name":"Ghe41","price":100,"booked":true},{"id":42,"name":"Ghe42","price":100,"booked":false},{"id":43,"name":"Ghe43","price":100,"booked":false},{"id":44,"name":"Ghe44","price":100,"booked":false},{"id":45,"name":"Ghe45","price":100,"booked":true},{"id":46,"name":"Ghe46","price":100,"booked":true},{"id":47,"name":"Ghe47","price":100,"booked":true},{"id":48,"name":"Ghe48","price":100,"booked":true},{"id":49,"name":"Ghe49","price":100,"booked":false},{"id":50,"name":"Ghe50","price":100,"booked":true},{"id":51,"name":"Ghe51","price":100,"booked":false},{"id":52,"name":"Ghe52","price":100,"booked":false},{"id":53,"name":"Ghe53","price":100,"booked":false},{"id":54,"name":"Ghe54","price":100,"booked":true},{"id":55,"name":"Ghe55","price":100,"booked":true},{"id":56,"name":"Ghe56","price":100,"booked":true},{"id":57,"name":"Ghe57","price":100,"booked":true},{"id":58,"name":"Ghe58","price":100,"booked":true},{"id":59,"name":"Ghe59","price":100,"booked":true},{"id":60,"name":"Ghe60","price":100,"booked":false},{"id":61,"name":"Ghe61","price":100,"booked":false},{"id":62,"name":"Ghe62","price":100,"booked":true},{"id":63,"name":"Ghe63","price":100,"booked":false},{"id":64,"name":"Ghe64","price":100,"booked":false},{"id":65,"name":"Ghe65","price":100,"booked":true},{"id":66,"name":"Ghe66","price":100,"booked":true},{"id":67,"name":"Ghe67","price":100,"booked":true},{"id":68,"name":"Ghe68","price":100,"booked":true},{"id":69,"name":"Ghe69","price":100,"booked":true},{"id":70,"name":"Ghe70","price":100,"booked":false},{"id":71,"name":"Ghe71","price":100,"booked":false},{"id":72,"name":"Ghe72","price":100,"booked":true},{"id":73,"name":"Ghe73","price":100,"booked":true},{"id":74,"name":"Ghe74","price":100,"booked":false},{"id":75,"name":"Ghe75","price":100,"booked":true},{"id":76,"name":"Ghe76","price":100,"booked":false},{"id":77,"name":"Ghe77","price":100,"booked":false},{"id":78,"name":"Ghe78","price":100,"booked":true},{"id":79,"name":"Ghe79","price":100,"booked":true}]`;

var seats = JSON.parse(JSData);

for (i = 0; i < seats.length; i++) {
  var booked = "";
  var event = "toggleSelected(event)";
  if (seats[i].booked === true) {
    booked = "booked";
    event = "";
  }
  $(".seats").append(
    `<div onclick="${event}" id-ghe="${seats[i].id}" price="${seats[i].price}" name="${seats[i].name}"  class="seat ${booked}"></div>`
  );
}

var selected = [];
var total = 0;
function toggleSelected(event) {
  $(event.target).toggleClass("selected");
  seatID = $(event.target).attr("id-ghe");
  seatName = $(event.target).attr("name");
  seatPrice = $(event.target).attr("price");
  total = total + Number(seatPrice);
  selected.push({
    id: seatID,
    name: seatName,
    price: seatPrice
  });

  if ($(".seat").hasClass("selected")) {
    total = total + Number(seatPrice);
  } else {
    total = total - Number(seatPrice);
  }
  // Gắn giá vào màn hình
  $("#price").text(total);
}
