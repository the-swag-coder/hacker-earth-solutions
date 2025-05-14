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
  let index = 0;
  const t = input[index++]; // number of test cases

  for (let test = 0; test < t; test++) {
    const n = input[index++];
    const arr = input.slice(index, index + n);
    index += n;

    let sum = 0;
    let mn = Infinity;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
      mn = Math.min(mn, arr[i]);
    }

    console.log(`${mn - 1} ${sum - n}`);
  }
});
