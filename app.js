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
