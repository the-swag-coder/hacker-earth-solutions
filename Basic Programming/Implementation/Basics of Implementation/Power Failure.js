const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", line => inputLines.push(line.trim()));
rl.on("close", () => {
  const MAX = 100001;
  const MOD = 1000000007;

  const p = Array(MAX).fill(true);
  const sum = Array(MAX).fill(0);

  p[0] = p[1] = false;

  for (let i = 2; i * i < MAX; i++) {
    if (p[i]) {
      for (let j = i * i; j < MAX; j += i) {
        p[j] = false;
      }
    }
  }

  for (let i = 2; i < MAX; i++) {
    sum[i] = sum[i - 1] + (p[i] ? 1 : 0);
  }

  let idx = 0;
  const T = parseInt(inputLines[idx++]);

  for (let t = 0; t < T; t++) {
    const [n, m] = inputLines[idx++].split(' ').map(Number);
    const v = inputLines[idx++].split(' ').map(Number);
    v.sort((a, b) => b - a);

    let ans = 1;
    for (let i = 0; i < n; i++) {
      if (v[i] > m) {
        ans = 0;
        break;
      }
      let res = Math.max(0, (m - i) - v[i] + 1);
      let primes = sum[m] - sum[v[i] - 1];
      res -= primes;
      ans = (ans * res) % MOD;
    }
    console.log(ans);
  }
});
