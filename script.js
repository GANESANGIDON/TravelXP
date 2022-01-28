// TravelXP (single page website)

// nav menubar folding
var hamburger = document.querySelector("#hamburger-icon");
var menu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (this.classList.contains("fa-bars")) {
    this.classList.remove("fa-bars");
    this.classList.add("fa-times");
  } else {
    this.classList.remove("fa-times");
    this.classList.add("fa-bars");
  }
});

// darkmode
var dark = document.querySelector("#darkmode-icon");
dark.addEventListener("click", function () {
  if (this.classList.contains("fa-sun")) {
    this.classList.remove("fa-sun");
    this.classList.add("fa-moon");
  } else {
    this.classList.remove("fa-moon");
    this.classList.add("fa-sun");
  }
  // to change the value of root variable
  var root = document.documentElement;
  root.classList.toggle("dark");
});

// jquery carousel (review section)
$(".review-carousel").owlCarousel({
  margin: 30,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    769: {
      items: 2
    },
    1025: {
      items: 3
    },
    1201: {
      items: 4
    }
  }
});