// 🎮 Referências ao canvas do Snake
const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
const box = 32;

// Estado do jogo
let snake = [{ x: 8 * box, y: 8 * box }];
let direction = 'right';
let score = 0;
let highScore = localStorage.getItem('snakeinfinityHighScore') || 0;

// Elementos de pontuação
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');

// Inicializa os textos
scoreElement.innerText = `Pontuação: ${score}`;
highScoreElement.innerText = `Maior Pontuação: ${highScore}`;

// Criação de comida
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
};

// Atualiza direção com base na tecla pressionada
function update(event) {
  if (event.keyCode == 37 && direction !== 'right') direction = 'left';
  if (event.keyCode == 38 && direction !== 'down') direction = 'up';
  if (event.keyCode == 39 && direction !== 'left') direction = 'right';
  if (event.keyCode == 40 && direction !== 'up') direction = 'down';
}

// Desenha fundo
function createBG() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, 16 * box, 16 * box);
}

// Desenha a cobra
function createSnake() {
  snake.forEach((segment, i) => {
    context.fillStyle = i === 0 ? 'green' : 'lightgreen';
    context.fillRect(segment.x, segment.y, box, box);
  });
}

// Desenha a comida
function createFood() {
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, box, box);
}

// Lógica do jogo principal
function startGame() {
  // Verifica colisão com o próprio corpo
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      clearInterval(game);
      alert('Game Over :(');
    }
  }

  createBG();
  createSnake();
  createFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // Movimentação
  if (direction === 'right') snakeX += box;
  if (direction === 'left') snakeX -= box;
  if (direction === 'up') snakeY -= box;
  if (direction === 'down') snakeY += box;

  // Warps nas bordas
  if (snakeX >= 16 * box) snakeX = 0;
  if (snakeX < 0) snakeX = 15 * box;
  if (snakeY >= 16 * box) snakeY = 0;
  if (snakeY < 0) snakeY = 15 * box;

  // Verifica se comeu
  if (snakeX !== food.x || snakeY !== food.y) {
    snake.pop();
  } else {
    score++;
    scoreElement.innerText = `Pontuação: ${score}`;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('snakeinfinityHighScore', highScore);
      highScoreElement.innerText = `Maior Pontuação: ${highScore}`;
    }
    // Gera nova comida
    food = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box
    };
  }

  snake.unshift({ x: snakeX, y: snakeY });
}

// Função para recarregar a página
function reloadPage() {
  window.location.reload();
}

document.addEventListener('keydown', update);
let game = setInterval(startGame, 100);

function reloadPage() {
  window.location.reload();
}