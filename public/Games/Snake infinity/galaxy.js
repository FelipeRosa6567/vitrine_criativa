// Fundo estilo galáxia com estrelas
const canvasGalaxy = document.getElementById('galaxy');
const ctxGalaxy = canvasGalaxy.getContext('2d');

// Ajusta o canvas à tela
function resizeCanvas() {
  canvasGalaxy.width = window.innerWidth;
  canvasGalaxy.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Gera 300 estrelas com movimento sutil
const stars = [];
const numStars = 300;
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvasGalaxy.width,
    y: Math.random() * canvasGalaxy.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1
  });
}

// Anima as estrelas
function animateStars() {
  ctxGalaxy.fillStyle = 'black';
  ctxGalaxy.fillRect(0, 0, canvasGalaxy.width, canvasGalaxy.height);
  ctxGalaxy.fillStyle = 'white';
  stars.forEach(star => {
    ctxGalaxy.beginPath();
    ctxGalaxy.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
    ctxGalaxy.fill();
    star.x = (star.x + star.dx + canvasGalaxy.width) % canvasGalaxy.width;
    star.y = (star.y + star.dy + canvasGalaxy.height) % canvasGalaxy.height;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Alterna a exibição do submenu
function toggleMenu() {
  const submenu = document.getElementById('submenu');
  submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
}
