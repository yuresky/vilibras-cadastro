window.addEventListener("scroll", function() {
    var header = document.querySelector(".left-section");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("shadows");
    } else {
      header.classList.remove("shadows");
    }
  });


const colors = ["#007BFF", "#FF5733", "#39CC86", "#E74C3C", "#9B59B6"];
let currentIndex = 0;
const wavePattern = document.querySelector('.wave-pattern');

function changeColor() {
  wavePattern.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 2000); // Alterna as cores a cada 2 segundos (ajuste conforme necessário)