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

const toggleButton = document.querySelector(".toggle--button");
const navbarLinks = document.querySelector(".navbar--links ul");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

document.querySelector("#about").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".main--stats")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#features").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".section1--text")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#pricing").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".plans").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#testimonials").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector(".testimonials")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});
