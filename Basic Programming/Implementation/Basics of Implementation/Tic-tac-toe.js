const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const board = [];

rl.on("line", function (line) {
  board.push(line.trim());
  if (board.length === 3) rl.close();
});

rl.on("close", function () {
  let xCount = 0, oCount = 0;
  for (let row of board) {
    for (let cell of row) {
      if (cell === 'X') xCount++;
      if (cell === 'O') oCount++;
    }
  }

  const wins = [
    // rows
    [ [0,0], [0,1], [0,2] ],
    [ [1,0], [1,1], [1,2] ],
    [ [2,0], [2,1], [2,2] ],
    // columns
    [ [0,0], [1,0], [2,0] ],
    [ [0,1], [1,1], [2,1] ],
    [ [0,2], [1,2], [2,2] ],
    // diagonals
    [ [0,0], [1,1], [2,2] ],
    [ [0,2], [1,1], [2,0] ],
  ];

  const checkWinner = (symbol) => {
    return wins.some(pattern =>
      pattern.every(([i,j]) => board[i][j] === symbol)
    );
  };

  const xWon = checkWinner('X');
  const oWon = checkWinner('O');

  // Invalid state checks
  if (oCount > xCount || xCount - oCount > 1) {
    console.log("Wait, what?");
  } else if (xWon && oWon) {
    console.log("Wait, what?");
  } else if (xWon && xCount === oCount + 1) {
    console.log("X won.");
  } else if (oWon && xCount === oCount) {
    console.log("O won.");
  } else if (xWon || oWon) {
    console.log("Wait, what?");
  } else if (xCount + oCount === 9) {
    console.log("It's a draw.");
  } else {
    console.log(xCount === oCount ? "X's turn." : "O's turn.");
  }
});
