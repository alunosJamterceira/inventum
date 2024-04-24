const images = document.querySelectorAll('.images img');
  const totalImages = images.length;
  let currentIndex = 0;
  const intervalTime = 5000; // Intervalo em milissegundos (5 segundos)
  let timer;

  // Função para avançar para a próxima imagem
  function nextImage() {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].style.display = 'block';
  }

  // Função para iniciar o carrossel
  function startCarousel() {
      timer = setInterval(nextImage, intervalTime);
  }

  // Iniciar o carrossel
  startCarousel();
});

document.addEventListener("DOMContentLoaded", function() {
  // Adiciona uma classe para iniciar a animação de digitação
  document.querySelector('.history p').classList.add('typing');
});
