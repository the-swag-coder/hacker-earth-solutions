const mod = 100000000000;

function power(x, y) {
  let res = 1;
  x %= mod;
  while (y > 0) {
    if (y & 1) {
      res = (res * x) % mod;
    }
    y = Math.floor(y / 2);  // y = y / 2
    x = (x * x) % mod;
  }
  return res % mod;
}

function inv(n) {
  return power(n, mod - 2) % mod;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [n, k] = input[0].split(' ').map(Number);
  const a = input[1].split(' ').map(Number);

  const b = Array.from({ length: k + 1 }, () => new Array(2048).fill(0));

  // Initializing b[1] based on the input a
  for (let i = 0; i < n; i++) {
    b[1][a[i]] = 1;
  }

  // Main DP calculation
  for (let i = 1; i < k; i++) {
    for (let j = 0; j <= 2047; j++) {
      if (b[i][j]) {
        for (let l = 0; l < n; l++) {
          b[i + 1][j | a[l]] = 1;
        }
      }
    }
  }

  // Calculating the final answer
  let ans = 0;
  for (let i = 0; i <= 2047; i++) {
    ans += b[k][i];
  }

  console.log(ans);
});
