const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  for (let _ = 0; _ < t; _++) {
    const [n, m, k] = inputLines[idx++].split(" ").map(Number);
    const boxes = inputLines[idx++].split(" ").map(Number).sort((a, b) => b - a); // Descending
    const balls = inputLines[idx++].split(" ").map(Number).sort((a, b) => b - a); // Descending

    let i = 0, j = 0, ans = 0;

    while (i < m && j < n) {
      if (balls[i] >= boxes[j] && balls[i] <= boxes[j] + k) {
        // Match found
        i++;
        j++;
        ans++;
      } else if (balls[i] < boxes[j]) {
        j++;
      } else {
        i++;
      }
    }

    console.log(ans);
  }
});