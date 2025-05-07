const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

rl.on('line', function(line) {
  inputLines.push(line.trim());
});

rl.on('close', function() {
  let t = parseInt(inputLines[0]);
  const size = 2000002;
  let f = new Array(size).fill(0);

  // Precompute smallest factor counts
  for (let i = 2; i < size; i++) {
    if (f[i] !== 0) continue;
    for (let k = i; k < size; k += i) {
      f[k] += 1;
    }
  }

  let idx = 1;
  for (let tc = 0; tc < t; tc++) {
    let [n, m] = inputLines[idx++].split(' ').map(Number);
    let ans = BigInt(0);
    let sum = n + m;
    for (let i = 2, j = sum; i <= j; i++, j--) {
      let factorSum = BigInt(f[i] + f[j]);
      let minVal = BigInt(Math.min(i - 1, Math.min(n, m)));
      ans += factorSum * minVal;
      if (i === j && sum % 2 === 0) {
        ans -= BigInt(f[j]) * minVal;
      }
    }
    console.log(ans.toString());
  }
});
