const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  const strings = input.slice(1, n + 1);

  // Step 1: Compute overlaps
  const overlap = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const a = strings[i], b = strings[j];
      const minLen = Math.min(a.length, b.length);
      for (let k = minLen; k >= 1; k--) {
        if (a.slice(-k) === b.slice(0, k)) {
          overlap[i][j] = k;
          break;
        }
      }
    }
  }

  const fullMask = (1 << n);
  const dp = Array.from({ length: fullMask }, () => Array(n).fill(Infinity));

  // Step 2: Initialize dp
  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = strings[i].length;
  }

  // Step 3: Fill DP table
  for (let mask = 1; mask < fullMask; mask++) {
    for (let last = 0; last < n; last++) {
      if (!(mask & (1 << last))) continue;
      for (let next = 0; next < n; next++) {
        if (mask & (1 << next)) continue;
        const newMask = mask | (1 << next);
        const newLen = dp[mask][last] + strings[next].length - overlap[last][next];
        dp[newMask][next] = Math.min(dp[newMask][next], newLen);
      }
    }
  }

  // Step 4: Get final answer
  let minLen = Infinity;
  for (let i = 0; i < n; i++) {
    minLen = Math.min(minLen, dp[fullMask - 1][i]);
  }

  console.log(minLen);
});
