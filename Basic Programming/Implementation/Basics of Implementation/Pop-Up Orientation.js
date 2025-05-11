const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let i = 0; i < t; i++) {
    const [x, y, l, m, a, b] = input[idx++].split(" ").map(Number);

    if ((a + l <= x) && (b - m >= 0)) {
      console.log("bottom-right");
    } else if ((a - l >= 0) && (b - m >= 0)) {
      console.log("bottom-left");
    } else if ((a + l <= x) && (b + m <= y)) {
      console.log("top-right");
    } else if ((a - l >= 0) && (b + m <= y)) {
      console.log("top-left");
    }
  }
});
