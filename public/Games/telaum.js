// Função de menu
function toggleMenu() {
  const submenu = document.getElementById("submenu");
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}

// Fundo galáxia
const canvas = document.getElementById('galaxy');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Estrelas
const stars = [];
const numStars = 300;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1
  });
}

function animateStars() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  });

  requestAnimationFrame(animateStars);
}

animateStars();