const boardDiv = document.getElementById("board");

// create board arrays for both the html elements and the logic
const width = 10;
const height = 20;
const boardElements = new Array(height);

// keeps each square in the game board, the numbers inside determine the color of the square
const board = new Array(height);

for (let i = 0; i < height; i++) {
  boardElements[i] = new Array(width);
  board[i] = new Array(width);
  for (let j = 0; j < width; j++) {
    let div = document.createElement("div");
    div.classList.add("square");
    boardElements[i][j] = div;
    boardDiv.appendChild(div);
    board[i][j] = 0;
  }
}

// the tetrominos
const i = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
];

const j = [
  [0, 2, 0],
  [0, 2, 0],
  [2, 2, 0],
];

const l = [
  [0, 3, 0],
  [0, 3, 0],
  [0, 3, 3],
];

const o = [
  [4, 4],
  [4, 4],
];

const s = [
  [0, 0, 0],
  [0, 5, 5],
  [5, 5, 0],
];

const t = [
  [0, 0, 0],
  [6, 6, 6],
  [0, 6, 0],
];

const z = [
  [0, 0, 0],
  [7, 7, 0],
  [0, 7, 7],
];

const tetrominos = [i, j, l, o, s, t, z];
const colors = [
  "black",
  "cyan",
  "blue",
  "orange",
  "yellow",
  "green",
  "purple",
  "red",
];

const player = {
  tetromino: null,
  offset: { x: 0, y: 0 },
};

// update game logic
let curTime = 0; // current time
let lastTime = 0; // last time updated
let tickDuration = 800; // wait this much before updating

function update(time = 0) {
  const diff = time - lastTime;
  curTime += diff;

  if (curTime > tickDuration) {
    fall();
    curTime = 0;
  }
  lastTime = time;
  draw();
  requestAnimationFrame(update);
}

function draw() {
  board.forEach((row, y) => {
    row.forEach((val, x) => {
      boardElements[y][x].style.backgroundColor = colors[val];
    });
  });
  player.tetromino.forEach((row, y) => {
    row.forEach((val, x) => {
      boardElements[y + player.offset.y][
        x + player.offset.x
      ].style.backgroundColor = colors[val];
    });
  });
}

function fall() {
  player.offset.y++;
  console.log(doesCollide());
  if (doesCollide()) {
    player.offset.y--;
    merge();
    newPlayer();
    clean();
  }
}

function doesCollide() {
  player.tetromino.forEach((row, y) => {
    row.forEach((val, x) => {
      if (
        val !== 0 &&
        (board[y + player.offset.y] &&
          board[y + player.offset.y][x + player.offset.x]) !== 0
      ) {
        // GETS INSIDE, RETURNS, BUT DOES NOT RETURN TRUE
        return true;
      }
    });
  });
  return false;
}

function merge() {
  player.tetromino.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val !== 0) {
        board[y + player.offset.y][x + player.offset.x] = val;
      }
    });
  });
}

// give player a new tetromino
function newPlayer() {
  player.tetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  player.offset.x = 3;
  player.offset.y = 0;

  if (doesCollide()) {
    gameOver();
  }
}

function clean() {
  board.forEach((row, y) => {
    let full = true;

    row.forEach((val) => {
      if (val === 0) {
        full = false;
      }
    });

    if (full) {
      for (let i = y - 1; i >= 0; i--) {
        board[i + 1] = board[i];
      }
      board[0].fill(0);
    }
  });

  // calculate score
}

newPlayer();
update();
