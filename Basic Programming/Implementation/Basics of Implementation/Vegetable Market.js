const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);
  const q = parseInt(input[2]);
  const queries = input.slice(3).map(BigInt);

  const MAX = 1000002;
  const leftarr = Array(MAX + 2).fill(0n);
  const rightarr = Array(MAX + 2).fill(0n);
  const quan = Array(MAX + 2).fill(0n);

  for (let i = 0; i < n; i++) {
    const val = arr[i];
    leftarr[val] += 1n;
    rightarr[val] += 1n;
  }

  // Prefix sum with weighted count
  for (let i = 1; i <= MAX; i++) {
    leftarr[i] = leftarr[i - 1] + BigInt(i) * leftarr[i];
  }

  // Suffix sum
  for (let i = MAX; i >= 0; i--) {
    rightarr[i] += rightarr[i + 1];
  }

  // Compute quan array
  for (let i = 1; i <= MAX; i++) {
    quan[i] = leftarr[i - 1] + rightarr[i] * BigInt(i);
  }

  // Binary search (lower_bound equivalent)
  const lowerBound = (arr, target) => {
    let low = 0, high = arr.length;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= target) high = mid;
      else low = mid + 1;
    }
    return low;
  };

  for (const K of queries) {
    const idx = lowerBound(quan, K);
    if (idx < quan.length) {
      console.log(idx);
    } else {
      console.log(-1);
    }
  }
});
