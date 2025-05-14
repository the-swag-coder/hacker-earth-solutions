const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(/\s+/).map(Number));
});

rl.on("close", () => {
  const n = input[0];
  const arr = input.slice(1, n + 1);

  let a = 0, b = 0, c = 0;

  for (let i = 0; i < n; i += 3) {
    a += arr[i];
  }

  for (let i = 1; i < n; i += 3) {
    b += arr[i];
  }

  for (let i = 2; i < n; i += 3) {
    c += arr[i];
  }

  console.log(`${a} ${b} ${c}`);
});
