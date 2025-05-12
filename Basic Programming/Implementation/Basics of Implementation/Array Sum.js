const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" ").map(BigInt));
});

rl.on("close", () => {
  let idx = 0;
  const n = Number(input[idx++]);
  let sum = 0n;

  for (let i = 0; i < n; i++) {
    sum += input[idx++];
  }

  console.log(sum.toString());
});
