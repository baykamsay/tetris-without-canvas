const boardDiv = document.getElementById("board");
const width = 10;
const height = 20;
const board = new Array(height);

// create the board array
for (let i = 0; i < height; i++) {
  board[i] = new Array(width);
  for (let j = 0; j < width; j++) {
    let div = document.createElement("div");
    div.classList.add("square");
    board[i][j] = div;
    boardDiv.appendChild(div);
  }
}

// the tetrominos
const i = {
  minos: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  color: "cyan",
};

const j = {
  minos: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  color: "blue",
};

const l = {
  minos: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  color: "orange",
};

const o = {
  minos: [
    [1, 1],
    [1, 1],
  ],
  color: "yellow",
};

const s = {
  minos: [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
  ],
  color: "green",
};

const z = {
  minos: [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ],
  color: "red",
};

const t = {
  minos: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  color: "purple",
};
