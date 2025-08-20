// Seleciona elementos do HTML
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');

// Tamanho de cada quadrado (box) da grade
const box = 20;

// Inicializa a cobra com uma posição inicial
let snake = [{ x: 9 * box, y: 10 * box }];

// Direção inicial (vazia até o jogador apertar uma tecla)
let direction = '';

// Gera comida em uma posição aleatória dentro da grade
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box
};

// Pontuação
let score = 0;
let highScore = localStorage.getItem('snakeWallHighScore') || 0;
highScoreElement.innerText = `Maior Pontuação: ${highScore}`;

// Função principal que desenha o jogo
function draw() {
  // Limpa o canvas e pinta o fundo de branco
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Desenha a cobra: cabeça em verde escuro, corpo em verde claro
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? 'green' : 'lightgreen';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Desenha a comida em vermelho
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x, food.y, box, box);

  // Calcula a nova posição da cabeça da cobra
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'LEFT') snakeX -= box;
  if (direction === 'UP') snakeY -= box;
  if (direction === 'RIGHT') snakeX += box;
  if (direction === 'DOWN') snakeY += box;

  // Verifica colisão com as bordas do canvas
  if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height) {
    clearInterval(game);
    alert('Game Over');
    return;
  }

  // Verifica se a cobra comeu a comida
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    scoreElement.innerText = `Pontuação: ${score}`;

    // Atualiza o recorde se necessário
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('snakeWallHighScore', highScore);
      highScoreElement.innerText = `Maior Pontuação: ${highScore}`;
    }

    // Gera nova comida em posição aleatória
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };
  } else {
    // Remove o último segmento da cobra se não comeu comida
    snake.pop();
  }

  // Cria a nova cabeça da cobra
  let newHead = { x: snakeX, y: snakeY };

  // Verifica se a cobra colidiu com ela mesma
  if (collision(newHead, snake)) {
    clearInterval(game);
    alert('Game Over');
    return;
  }

  // Adiciona a nova cabeça no início do array da cobra
  snake.unshift(newHead);
}

// Função para verificar colisão entre a cabeça e o corpo da cobra
function collision(head, array) {
  return array.some(segment => segment.x === head.x && segment.y === head.y);
}

// Evento para capturar as teclas pressionadas e mudar a direção
document.addEventListener('keydown', directionEvent);
function directionEvent(event) {
  let key = event.keyCode;
  if (key === 37 && direction !== 'RIGHT') direction = 'LEFT';
  else if (key === 38 && direction !== 'DOWN') direction = 'UP';
  else if (key === 39 && direction !== 'LEFT') direction = 'RIGHT';
  else if (key === 40 && direction !== 'UP') direction = 'DOWN';
}

// Inicia o jogo chamando a função draw a cada 100 ms
let game = setInterval(draw, 100);

// Função para recarregar a página (pode ser usada em um botão)
function reloadPage() {
  location.reload();
}
