const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  // Parse input
  const [t, k] = lines[0].split(" ").map(Number);
  const arr = lines[1].split(" ").map(Number);

  // Create array of pairs (value, index) - use 1-indexed as in original code
  let pairs = arr.map((val, idx) => [val, idx + 1]);

  // Sort by value
  pairs.sort((a, b) => a[0] - b[0]);

  // Calculate initial sum using BigInt to prevent overflow
  let sum = arr.reduce((acc, val) => acc + BigInt(val), 0n);

  // Create idx array
  const idx = new Array(t);

  // Calculate first value
  idx[0] = sum - modMultiply(t, pairs[0][0]);
  let prevs = pairs[0][0];

  // Calculate rest of values
  for (let cnt = 1; cnt < t; cnt++) {
    let dif = pairs[cnt][0] - prevs;
    prevs = pairs[cnt][0];
    idx[cnt] = idx[cnt - 1] + modMultiply(cnt, dif) - modMultiply((t - cnt), dif);
  }

  // Apply relu function to each element
  for (let i = 0; i < t; i++) {
    idx[i] = relu(idx[i], k);
  }

  // Find minimum value
  let minValue = idx.reduce((min, val) => val < min ? val : min, idx[0]);

  // Find the minimum index in original order
  let mn = Infinity;
  for (let cnt = 0; cnt < t; cnt++) {
    if (idx[cnt] === minValue) {
      mn = Math.min(mn, pairs[cnt][1]);
    }
  }

  // Find the corresponding idx value for the minimum index
  for (let cnt = 0; cnt < t; cnt++) {
    if (pairs[cnt][1] === mn) {
      console.log(`${mn} ${idx[cnt]}`);
      break;
    }
  }
});

// Implementation of modMultiply as in the original C++ code
function modMultiply(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  let res = 0n;

  while (b > 0n) {
    if (b & 1n) res += a;
    a *= 2n;
    b >>= 1n;
  }

  return res;
}

// ReLU function as described in original code
function relu(a, k) {
  a = BigInt(a) - BigInt(k);

  if (a < 0n) {
    // Check if absolute value of a is odd
    return (a * -1n) & 1n ? 1n : 0n;
  }

  return a;
}