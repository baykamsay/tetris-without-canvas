const board = document.getElementById("board");

const boardArr = [];

for (let i = 0; i < 200; i++) {
  let div = document.createElement("div");
  div.classList.add("square");
  boardArr.push(div);
  board.appendChild(div);
}
