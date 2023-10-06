// window.addEventListener("scroll", function() {
//     var header = document.querySelector(".left-section");
//     var scrollPosition = window.scrollY;
  
//     if (scrollPosition > 0) {
//       header.classList.add("shadows");
//     } else {
//       header.classList.remove("shadows");
//     }
//   });


// const colors = ["#007BFF", "#FF5733", "#39CC86", "#E74C3C", "#9B59B6"];
// let currentIndex = 0;
// const wavePattern = document.querySelector('.wave-pattern');

// function changeColor() {
//   wavePattern.style.backgroundColor = colors[currentIndex];
//   currentIndex = (currentIndex + 1) % colors.length;
// }

// setInterval(changeColor, 2000); // Alterna as cores a cada 2 segundos (ajuste conforme necessário)

// Função para mostrar o pop-up
// function mostrarPopup() {
//   document.getElementById('popupCadastro').style.display = 'block';
// }

// // Função para fechar o pop-up
// function fecharPopup() {
//   document.getElementById('popupCadastro').style.display = 'none';
// }

// // Adicione um ouvinte de evento ao botão de registro para mostrar o pop-up
// document.getElementById('btnMostrarPopup').addEventListener('click', mostrarPopup);

// // Adicione um ouvinte de evento ao botão "Fechar" no pop-up para fechá-lo
// document.getElementById('btnFecharPopup').addEventListener('click', fecharPopup);


window.addEventListener('load', function () {
  const foto = document.getElementById('foto');
  const container = document.querySelector('.container');

  // Aumentar o tamanho e rotacionar a foto
  container.style.transform = 'scale(2) rotate(45deg)';
});
