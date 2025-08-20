// FUNDO GALÁXIA ANIMADO

// Seleciona o canvas do fundo da galáxia
const galaxyCanvas = document.getElementById('galaxy');
const galaxyCtx = galaxyCanvas.getContext('2d');

// Ajusta o canvas para preencher toda a tela
function resizeGalaxy() {
  galaxyCanvas.width = window.innerWidth;
  galaxyCanvas.height = window.innerHeight;
}
resizeGalaxy();
window.addEventListener('resize', resizeGalaxy);

// Cria estrelas com posições e velocidades aleatórias
const stars = [];
const numStars = 300;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * galaxyCanvas.width,
    y: Math.random() * galaxyCanvas.height,
    r: Math.random() * 1.5 + 0.5,          // raio (tamanho)
    dx: (Math.random() - 0.5) * 0.1,       // velocidade X
    dy: (Math.random() - 0.5) * 0.1        // velocidade Y
  });
}

// Função para animar as estrelas
function animateStars() {
  // Preenche fundo preto
  galaxyCtx.fillStyle = 'black';
  galaxyCtx.fillRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);

  // Desenha cada estrela
  galaxyCtx.fillStyle = 'white';
  stars.forEach(star => {
    galaxyCtx.beginPath();
    galaxyCtx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    galaxyCtx.fill();

    // Atualiza posição
    star.x += star.dx;
    star.y += star.dy;

    // Faz a estrela reaparecer do outro lado ao sair da tela
    if (star.x < 0) star.x = galaxyCanvas.width;
    if (star.x > galaxyCanvas.width) star.x = 0;
    if (star.y < 0) star.y = galaxyCanvas.height;
    if (star.y > galaxyCanvas.height) star.y = 0;
  });

  requestAnimationFrame(animateStars);
}
animateStars();

// JOGO TETRIS

// Configurações iniciais e constantes
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 32;                        // tamanho de cada bloco
const tetrominoSequence = [];           // sequência das peças
let score = 0;                          // pontuação
let fallSpeed = 35;                     // velocidade da queda inicial
let contagem = 0;                       // contador para controle de queda
let rAF = null;                         // referência do requestAnimationFrame
let gameOver = false;                   // estado do jogo

// Tabuleiro (playfield): 10 colunas x 20 linhas (+ linhas negativas para spawn)
const playfield = [];
for (let row = -2; row < 20; row++) {
  playfield[row] = [];
  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}

// Tetrominos e suas matrizes
const tetrominos = {
  'I': [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
  'J': [[1,0,0],[1,1,1],[0,0,0]],
  'L': [[0,0,1],[1,1,1],[0,0,0]],
  'O': [[1,1],[1,1]],
  'S': [[0,1,1],[1,1,0],[0,0,0]],
  'Z': [[1,1,0],[0,1,1],[0,0,0]],
  'T': [[0,1,0],[1,1,1],[0,0,0]]
};

// Cores para cada tetromino
const cores = {
  'I': 'cyan',
  'O': 'yellow',
  'T': 'purple',
  'S': 'green',
  'Z': 'red',
  'J': 'blue',
  'L': 'orange'
};

// Gera nova sequência de peças aleatórias (bag randomizer)
function generateSequence() {
  const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  while (sequence.length) {
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    tetrominoSequence.push(name);
  }
}

// Retorna o próximo tetromino
function getNextTetromino() {
  if (tetrominoSequence.length === 0) {
    generateSequence();
  }
  const name = tetrominoSequence.pop();
  const matrix = tetrominos[name];
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
  const row = name === 'I' ? -1 : -2;
  return { name, matrix, row, col };
}

// Rotaciona a matriz do tetromino
function rotate(matrix) {
  const N = matrix.length - 1;
  return matrix.map((row, i) =>
    row.map((_, j) => matrix[N - j][i])
  );
}

// Verifica se movimento é válido
function isValidMove(matrix, cellRow, cellCol) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && (
        cellCol + col < 0 ||
        cellCol + col >= playfield[0].length ||
        cellRow + row >= playfield.length ||
        playfield[cellRow + row][cellCol + col])
      ) {
        return false;
      }
    }
  }
  return true;
}

// Coloca o tetromino fixo no tabuleiro
function placeTetromino() {
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {
        if (tetromino.row + row < 0) return showGameOver();
        playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
      }
    }
  }

  // Verifica e remove linhas completas
  for (let row = playfield.length - 1; row >= 0;) {
    if (playfield[row].every(cell => !!cell)) {
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r - 1][c];
        }
      }
    } else {
      row--;
    }
  }

  score += 100;
  updateScore();
  adjustSpeed();
  tetromino = getNextTetromino();
}

// Mostra mensagem de fim de jogo
function showGameOver() {
  cancelAnimationFrame(rAF);
  gameOver = true;

  const highScore = localStorage.getItem('highScore') || 0;
  if (score > highScore) {
    localStorage.setItem('highScore', score);
    document.getElementById('high-score').innerText = `Maior Pontuação: ${score}`;
  }

  context.fillStyle = 'black';
  context.globalAlpha = 0.75;
  context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);

  context.globalAlpha = 1;
  context.fillStyle = 'white';
  context.font = '36px monospace';
  context.textAlign = 'center';
  context.fillText('FIM DE JOGO!', canvas.width / 2, canvas.height / 2);
}

// Atualiza pontuação na tela
function updateScore() {
  document.getElementById('score').innerText = `Pontuação: ${score}`;
}

// Ajusta velocidade conforme pontuação aumenta
function adjustSpeed() {
  fallSpeed = Math.max(10, 35 - Math.floor(score / 100) * 5);
}

// Retorna número aleatório inteiro entre min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// LOOP PRINCIPAL
let tetromino = getNextTetromino();

function loop() {
  rAF = requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha tabuleiro
  for (let linha = 0; linha < 20; linha++) {
    for (let coluna = 0; coluna < 10; coluna++) {
      if (playfield[linha][coluna]) {
        context.fillStyle = cores[playfield[linha][coluna]];
        context.fillRect(coluna * grid, linha * grid, grid - 1, grid - 1);
      }
    }
  }

  // Controla queda do tetromino
  if (tetromino) {
    if (++contagem > fallSpeed) {
      tetromino.row++;
      contagem = 0;
      if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTetromino();
      }
    }

    // Desenha tetromino atual
    context.fillStyle = cores[tetromino.name];
    for (let linha = 0; linha < tetromino.matrix.length; linha++) {
      for (let coluna = 0; coluna < tetromino.matrix[linha].length; coluna++) {
        if (tetromino.matrix[linha][coluna]) {
          context.fillRect((tetromino.col + coluna) * grid, (tetromino.row + linha) * grid, grid - 1, grid - 1);
        }
      }
    }
  }
}
rAF = requestAnimationFrame(loop);

// CONTROLE DE TECLAS
document.addEventListener('keydown', function (e) {
  if (gameOver) return;

  if (e.which === 37 || e.which === 39) {
    // Esquerda ou direita
    const novaCol = e.which === 37 ? tetromino.col - 1 : tetromino.col + 1;
    if (isValidMove(tetromino.matrix, tetromino.row, novaCol)) {
      tetromino.col = novaCol;
    }
  }
  if (e.which === 38) {
    // Rotaciona
    const novaMatriz = rotate(tetromino.matrix);
    if (isValidMove(novaMatriz, tetromino.row, tetromino.col)) {
      tetromino.matrix = novaMatriz;
    }
  }
  if (e.which === 40) {
    // Desce mais rápido
    const novaLinha = tetromino.row + 1;
    if (!isValidMove(tetromino.matrix, novaLinha, tetromino.col)) {
      tetromino.row = novaLinha - 1;
      placeTetromino();
      return;
    }
    tetromino.row = novaLinha;
  }
});

// OUTROS
window.onload = function () {
  const highScore = localStorage.getItem('highScore') || 0;
  document.getElementById('high-score').innerText = `Maior Pontuação: ${highScore}`;
};

// Função para abrir/fechar submenu do menu
function toggleMenu() {
  const submenu = document.getElementById("submenu");
  submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
}

// Controles de toque para dispositivos móveis
function moveLeft() {
  if (!gameOver) {
    const novaCol = tetromino.col - 1;
    if (isValidMove(tetromino.matrix, tetromino.row, novaCol)) {
      tetromino.col = novaCol;
    }
  }
}

function moveRight() {
  if (!gameOver) {
    const novaCol = tetromino.col + 1;
    if (isValidMove(tetromino.matrix, tetromino.row, novaCol)) {
      tetromino.col = novaCol;
    }
  }
}

function moveDown() {
  if (!gameOver) {
    const novaLinha = tetromino.row + 1;
    if (!isValidMove(tetromino.matrix, novaLinha, tetromino.col)) {
      tetromino.row = novaLinha - 1;
      placeTetromino();
    } else {
      tetromino.row = novaLinha;
    }
  }
}

function rotate() {
  if (!gameOver) {
    const novaMatriz = rotateMatrix(tetromino.matrix);
    if (isValidMove(novaMatriz, tetromino.row, tetromino.col)) {
      tetromino.matrix = novaMatriz;
    }
  }
}

// Duplicata segura da função de rotação usada pelo botão
function rotateMatrix(matrix) {
  const N = matrix.length - 1;
  return matrix.map((row, i) =>
    row.map((_, j) => matrix[N - j][i])
  );
}
