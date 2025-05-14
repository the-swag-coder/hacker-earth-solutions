const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
});

const players = ["Hacker", "Mishki"];

function countLeadingZeros(num) {
  if (num === 0) return 32;
  return Math.clz32(num);
}

rl.on("close", () => {
  const [n, q] = input[0].split(" ").map(Number);
  const values = input[1].split(" ").map(Number);

  const dp = new Array(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + (countLeadingZeros(values[i - 1]) & 1);
  }

  let result = '';
  for (let i = 0; i < q; i++) {
    const [l, r] = input[i + 2].split(" ").map(Number);
    const w = (dp[r] - dp[l - 1]) & 1;
    result += players[w] + '\n';
  }

  console.log(result);
});
