const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const MX = 1e6;
const arr = new Array(MX + 1);

// Precompute the arr array
let r = 2;
for (let i = 1; i <= MX; i++) {
  if (i >= r) r <<= 1;
  arr[i] = (i * r) - 1;
}

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(inputLines[0]);
  const results = [];

  for (let i = 1; i <= t; i++) {
    const x = parseInt(inputLines[i]);
    const lbIndex = lowerBound(arr, x, 1, MX); // Use custom lower bound
    results.push(x - lbIndex + 1);
  }

  console.log(results.join("\n"));
});

// Binary search for lower_bound
function lowerBound(arr, target, left, right) {
  let ans = right + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
