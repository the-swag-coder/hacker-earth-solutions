const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const T = parseInt(input[0]);
  let index = 1;

  for (let i = 0; i < T; i++) {
    const N = parseInt(input[index++]);
    const sum = 1 << Math.floor(Math.log2(N));
    console.log(sum);
  }
});
