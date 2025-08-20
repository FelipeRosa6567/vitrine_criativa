const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');
const box = 32;

let snake = [{ x: 8 * box, y: 8 * box }];
let direction = 'right';
let score = 0;
let highScore = localStorage.getItem('snakeGame1HighScore') || 0;

// Elementos
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const timerElement = document.getElementById('timer');

scoreElement.innerText = `Pontuação: ${score}`;
highScoreElement.innerText = `Maior Pontuação: ${highScore}`;

// Criação de comida
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
};

// Tempo e velocidade
let totalTime = 180; // 3 minutos em segundos
let gameSpeed = 100; // Velocidade inicial em ms
let game;

// Cronômetro
function startTimer() {
  const interval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(interval);
      clearInterval(game);
      alert('⏱️ Tempo esgotado! Game Over!');
      return;
    }

    totalTime--;
    const minutes = String(Math.floor(totalTime / 60)).padStart(2, '0');
    const seconds = String(totalTime % 60).padStart(2, '0');
    timerElement.innerText = `Tempo restante: ${minutes}:${seconds}`;
  }, 1000);
}

// Direção
function update(event) {
  if (event.keyCode == 37 && direction !== 'right') direction = 'left';
  if (event.keyCode == 38 && direction !== 'down') direction = 'up';
  if (event.keyCode == 39 && direction !== 'left') direction = 'right';
  if (event.keyCode == 40 && direction !== 'up') direction = 'down';
}

// Fundo, cobra e comida
function createBG() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, 16 * box, 16 * box);
}
function createSnake() {
  snake.forEach((segment, i) => {
    context.fillStyle = i === 0 ? 'green' : 'lightgreen';
    context.fillRect(segment.x, segment.y, box, box);
  });
}
function createFood() {
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, box, box);
}

// Reinicia jogo com nova velocidade
function restartGameInterval() {
  clearInterval(game);
  game = setInterval(startGame, gameSpeed);
}

// Jogo principal
function startGame() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      clearInterval(game);
      alert('Game Over :(');
      return;
    }
  }

  createBG();
  createSnake();
  createFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'right') snakeX += box;
  if (direction === 'left') snakeX -= box;
  if (direction === 'up') snakeY -= box;
  if (direction === 'down') snakeY += box;

  if (snakeX >= 16 * box) snakeX = 0;
  if (snakeX < 0) snakeX = 15 * box;
  if (snakeY >= 16 * box) snakeY = 0;
  if (snakeY < 0) snakeY = 15 * box;

  if (snakeX !== food.x || snakeY !== food.y) {
    snake.pop();
  } else {
    score++;
    scoreElement.innerText = `Pontuação: ${score}`;

    // Atualiza high score
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('snakeGame1HighScore', highScore);
      highScoreElement.innerText = `Maior Pontuação: ${highScore}`;
    }

    // Gera nova comida
    food = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box
    };

    // Aumenta suavemente a velocidade: 5ms por maçã
    gameSpeed = Math.max(60, gameSpeed - 5); // limite mínimo de 60ms

  }

  snake.unshift({ x: snakeX, y: snakeY });
}

// Recarregar
function reloadPage() {
  window.location.reload();
}

document.addEventListener('keydown', update);
startTimer();
game = setInterval(startGame, gameSpeed);
