const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => inputLines.push(line.trim()));

rl.on("close", () => {
  const [n] = inputLines[0].split(' ').map(Number);

  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  console.log(arr.join(' '));
});
