const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MOD = 1000000007n;
const MAX = 1007;

const ncrMemo = Array.from({ length: MAX }, () => Array(MAX).fill(-1n));

function ncr(n, r) {
  if (n === r || r === 0) return 1n;
  if (n < r) return 0n;
  if (ncrMemo[n][r] !== -1n) return ncrMemo[n][r];
  ncrMemo[n][r] = (ncr(n - 1, r - 1) + ncr(n - 1, r)) % MOD;
  return ncrMemo[n][r];
}

function func(nodes) {
  if (nodes.length <= 1) return 1n;

  const root = nodes[0];
  const left = nodes.filter(x => x < root);
  const right = nodes.filter(x => x > root);

  let ans = (func(left) * func(right)) % MOD;
  ans = (ans * ncr(nodes.length - 1, left.length)) % MOD;

  return ans;
}

let t = null;
let count = 0;
let inputState = 0;
let currentTestSize = 0;
let currentTest = [];

const inputs = [];

rl.on("line", (line) => {
  if (t === null) {
    t = parseInt(line.trim());
  } else {
    const tokens = line.trim().split(" ").map(Number);
    if (inputState === 0) {
      currentTestSize = tokens[0];
      inputState = 1;
    } else {
      currentTest = tokens;
      inputs.push(currentTest);
      count++;
      inputState = 0;
      if (count === t) {
        rl.close();
      }
    }
  }
});

rl.on("close", () => {
  for (let arr of inputs) {
    console.log(func(arr).toString());
  }
});
