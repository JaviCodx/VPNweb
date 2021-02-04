var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  autoPlay: 3000,
  prevNextButtons: false,
  pageDots: false,
  cellAlign: "left",
  contain: true,
});

var testimonials = document.querySelector(".testimonials-carousel");
var flkty2 = new Flickity(testimonials, {
  // options
  wrapAround: true,
  autoPlay: 4000,
  prevNextButtons: false,
  pageDots: true,
  cellAlign: "left",
  contain: true,
});
