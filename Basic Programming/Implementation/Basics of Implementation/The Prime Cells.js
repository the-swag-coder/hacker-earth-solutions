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
  const n = input[0];
  const arr = [];
  let idx = 1;

  // Fill matrix
  for (let i = 0; i < n; i++) {
    arr.push(input.slice(idx, idx + n));
    idx += n;
  }

  // Prime check function
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let t = 0, l = 0, r = 0, b = 0;
      if (i - 1 >= 0) l = arr[i - 1][j];
      if (j - 1 >= 0) t = arr[i][j - 1];
      if (i + 1 < n) r = arr[i + 1][j];
      if (j + 1 < n) b = arr[i][j + 1];

      const sum = t + l + r + b;

      if (isPrime(sum)) {
        count++;
      }
    }
  }

  console.log(count);
});
