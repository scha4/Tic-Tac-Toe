let player1 = "X";
let player2 = "O";
let gameOver = false;
let moves = 0;
const winningCombos = [
  [0, 1, 2],

  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boxes = document.querySelectorAll(".box");
const whoseTurn = document.querySelector(".turn");
const reset = document.querySelector(".reset");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (box.innerText === "") {
      if (!gameOver && box.innerText === "") {
        box.innerText = player1;
        moves++;
        const winner = checkWinner();
        if (winner) {
          whoseTurn.innerText = `Player ${winner} wins!`;
          gameOver = true;
        } else if (moves === 9) {
          gameOver = true;
          whoseTurn.innerText = "It's a draw!";
          whoseTurn.classList.add("draw");
        } else {
          player1 = player1 === "X" ? "O" : "X";
          whoseTurn.innerText = `Player ${player1}'s turn`;
        }
      }
    }
  });
});
// reset.addEventListener("click", function () {
//   document.getElementById("myForm").reset();
//   gameOver = false;
// });
reset.addEventListener("click", function () {
  document.getElementById("myForm").reset();
  boxes.forEach((box) => {
    box.innerText = "";
    box.classList.remove("winner");
  });
  whoseTurn.innerText = `Player ${player1}'s turn`;
  player1 = "X";
  gameOver = false;
  header.classList.remove("win"); // Remove the win class from the header element
});

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[a].innerText === boxes[c].innerText
    ) {
      boxes[a].classList.add("winner");
      boxes[b].classList.add("winner");
      boxes[c].classList.add("winner");
      whoseTurn.innerText = `Player ${boxes[a].innerText} wins!`;
      whoseTurn.classList.add("win");
      return boxes[a].innerText;
    }
  }
  return null;
}

//ai
