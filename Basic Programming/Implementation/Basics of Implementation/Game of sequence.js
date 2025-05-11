const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));

rl.on("close", () => {
  let line = 0;
  const T = parseInt(input[line++]);

  for (let t = 0; t < T; t++) {
    const n = parseInt(input[line++]);
    const A = input[line++].split(' ').map(Number);
    const unique = new Set(A);
    const winner = unique.size % 2 === 1 ? 'P' : 'Q';
    console.log(winner);
  }
});
