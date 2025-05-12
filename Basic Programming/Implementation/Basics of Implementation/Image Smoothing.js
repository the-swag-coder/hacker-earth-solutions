const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const [n, m] = input[idx++].split(" ").map(Number);
  const kernelSize = m * 2 + 1;

  // Read coefficients matrix
  const coef = [];
  for (let i = 0; i < kernelSize; i++) {
    coef.push(input[idx++].split(" ").map(Number));
  }

  // Read board matrix (1-based index in original, we will pad with 0 row at index 0)
  const board = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    const row = input[idx++].split(" ").map(Number);
    for (let j = 1; j <= n; j++) {
      board[i][j] = row[j - 1];
    }
  }

  // Define safe get function to avoid index out of bounds
  const get = (a, b) => {
    if (a < 1 || b < 1 || a > n || b > n) return 0;
    return board[a][b];
  };

  // Convolution operation
  for (let i = 1; i <= n; i++) {
    const outputRow = [];
    for (let j = 1; j <= n; j++) {
      let here = 0;
      for (let q = 0; q < kernelSize; q++) {
        for (let w = 0; w < kernelSize; w++) {
          here += get(i - m + q, j - m + w) * coef[q][w];
        }
      }
      outputRow.push(here);
    }
    console.log(outputRow.join(" "));
  }
});
