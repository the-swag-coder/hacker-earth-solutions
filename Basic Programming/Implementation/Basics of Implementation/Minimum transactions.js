const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const g = Array(n).fill(0);

  for (let i = 1; i <= m; i++) {
    const [v, u, w] = input[i].split(" ").map(Number);
    g[v - 1] += w;
    g[u - 1] -= w;
  }

  const result = g.reduce((sum, val) => sum + (val > 0 ? val : 0), 0);
  console.log(result);
});
