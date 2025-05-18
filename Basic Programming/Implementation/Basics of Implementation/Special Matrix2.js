const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[idx++]);
    const matrix = [];

    for (let j = 0; j < n; j++) {
      matrix.push(input[idx++].split(""));
    }

    let sr = -1, sc = -1;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (matrix[row][col] === "*") {
          sr = row + 1;
          sc = col + 1;
          break;
        }
      }
      if (sr !== -1) break;
    }

    const center = Math.ceil(n / 2);
    const moves = Math.abs(center - sr) + Math.abs(center - sc);
    console.log(moves);
  }
});
