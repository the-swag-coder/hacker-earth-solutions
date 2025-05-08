const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MOD = 1000000007n;

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(BigInt); // `n` is unused
  let ans = 1n;

  for (let i = 1n; i <= m; i++) {
    ans = (ans * i) % MOD;
  }

  console.log(ans.toString());
});
