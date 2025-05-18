const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    console.log(parseInt(input[i]));
  }
});
