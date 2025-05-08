const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  let T = parseInt(input[0]);
  let idx = 1;

  for (let t = 0; t < T; t++) {
    let N = parseInt(input[idx]);
    let U = input[idx + 1].split(" ").map(Number);
    let A = input[idx + 2].split(" ").map(Number);
    idx += 3;

    const result = solve(A, U, N);
    console.log(result);
  }
});

function solve(A, U, N) {
  let selected = [];
  let x = A[0];
  let y = U[0];

  for (let i = 1; i < N; i++) {
    if (y === U[i]) {
      x = Math.max(x, A[i]);
    } else {
      selected.push(x);
      x = A[i];
      y = U[i];
    }
  }
  selected.push(x);

  return selected.reduce((sum, val) => sum + val, 0);
}
