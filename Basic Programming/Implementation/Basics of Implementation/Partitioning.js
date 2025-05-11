const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  const s = input[0];
  const [cStr, pStr] = input[1].split(" ");
  const c = BigInt(cStr);
  const p = BigInt(pStr);
  const n = s.length;

  const countC = new Array(n).fill(0);
  const countMap = new Map();

  // Precompute frequencies of values equal to `c` for left substrings
  for (let i = 0; i < n; i++) {
    let val = 0n;
    for (let j = i; j >= Math.max(0, i - 24); j--) {
      val = val + (s[j] === '1' ? 1n << BigInt(i - j) : 0n);
      if (val === c) countC[i]++;
    }
  }

  // Precompute frequencies of values equal to `p` for right substrings
  for (let i = 0; i < n; i++) {
    let val = 0n;
    for (let j = i; j < Math.min(n, i + 25); j++) {
      val = (val << 1n) + (s[j] === '1' ? 1n : 0n);
      if (val === p) {
        if (!countMap.has(i)) countMap.set(i, 0);
        countMap.set(i, countMap.get(i) + 1);
      }
    }
  }

  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    const leftCount = countC[i] || 0;
    const rightCount = countMap.get(i + 1) || 0;
    result += leftCount * rightCount;
  }

  console.log(result);
});
