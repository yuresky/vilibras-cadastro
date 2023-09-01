window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("shadows");
    } else {
      header.classList.remove("shadows");
    }
  });
  