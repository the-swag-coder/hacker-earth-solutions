const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const N = parseInt(input[0]);
  const [r, c, p] = input[1].split(" ").map(Number);

  const arr = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    let row = "";
    for (let j = 0; j < N; j++) {
      const dist = Math.max(Math.abs(r - i), Math.abs(c - j));
      if (dist <= p) {
        arr[i][j] = p - dist;
      }
      row += arr[i][j] + " ";
    }
    console.log(row.trim());
  }
});
