// Fundo animado de galáxia com estrelas

// Seleciona o canvas do fundo da galáxia
const canvasGalaxy = document.getElementById('galaxy');
const ctxGalaxy = canvasGalaxy.getContext('2d');

// Ajusta o tamanho do canvas para ocupar toda a tela
function resizeCanvas() {
  canvasGalaxy.width = window.innerWidth;
  canvasGalaxy.height = window.innerHeight;
}
resizeCanvas();

// Atualiza o tamanho sempre que a janela for redimensionada
window.addEventListener('resize', resizeCanvas);

// Cria um array de estrelas com posições e velocidades aleatórias
const stars = [];
const numStars = 300; // quantidade de estrelas

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvasGalaxy.width,            // posição X inicial
    y: Math.random() * canvasGalaxy.height,           // posição Y inicial
    r: Math.random() * 1.5 + 0.5,                     // raio da estrela (tamanho)
    dx: (Math.random() - 0.5) * 0.1,                  // velocidade X
    dy: (Math.random() - 0.5) * 0.1                   // velocidade Y
  });
}

// Função que anima as estrelas no fundo
function animateStars() {
  // Pinta o fundo de preto
  ctxGalaxy.fillStyle = 'black';
  ctxGalaxy.fillRect(0, 0, canvasGalaxy.width, canvasGalaxy.height);

  // Desenha cada estrela
  ctxGalaxy.fillStyle = 'white';
  stars.forEach(star => {
    ctxGalaxy.beginPath();
    ctxGalaxy.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctxGalaxy.fill();

    // Atualiza a posição da estrela
    star.x += star.dx;
    star.y += star.dy;

    // Faz as estrelas reaparecerem do outro lado ao sair da tela
    if (star.x < 0) star.x = canvasGalaxy.width;
    if (star.x > canvasGalaxy.width) star.x = 0;
    if (star.y < 0) star.y = canvasGalaxy.height;
    if (star.y > canvasGalaxy.height) star.y = 0;
  });

  // Continua a animação no próximo frame
  requestAnimationFrame(animateStars);
}

// Inicia a animação
animateStars();

// Função para abrir/fechar o submenu de navegação
function toggleMenu() {
  const submenu = document.getElementById("submenu");
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}
