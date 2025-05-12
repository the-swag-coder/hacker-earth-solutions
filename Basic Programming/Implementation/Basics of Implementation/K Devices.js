const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  let idx = 0;
  const n = input[idx++];
  const k = input[idx++];

  const x = input.slice(idx, idx + n);
  idx += n;

  const y = input.slice(idx, idx + n);
  idx += n;

  const d = [];

  for (let i = 0; i < n; i++) {
    d.push(x[i] * x[i] + y[i] * y[i]);
  }

  d.sort((a, b) => a - b);

  const ans = Math.ceil(Math.sqrt(d[k - 1]));
  console.log(ans);
});
