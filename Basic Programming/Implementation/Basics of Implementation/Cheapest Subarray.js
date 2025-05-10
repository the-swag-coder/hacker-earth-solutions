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
  let index = 0;
  const t = parseInt(inputLines[index++]);

  for (let test = 0; test < t; test++) {
    const n = parseInt(inputLines[index++]);
    const A = inputLines[index++].split(" ").map(Number);

    let answer = Infinity;

    for (let i = 0; i + 1 < n; i++) {
      answer = Math.min(answer, A[i] + A[i + 1]);
    }

    console.log(answer);
  }
});
