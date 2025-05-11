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
  let idx = 0;
  const n = parseInt(input[idx++]);
  const m = parseInt(input[idx++]);

  const g = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

  for (let t = 0; t < m; t++) {
    const [p, a, b, c, d] = input[idx++].split(" ").map(Number);
    for (let i = a; i <= c; i++) {
      g[i][b] ^= p;
      g[i][d + 1] ^= p;
    }
  }

  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
      g[i][j] ^= g[i][j - 1];
      row.push(g[i][j]);
    }
    console.log(row.join(" "));
  }
});
