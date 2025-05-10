const readline = require("readline");

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let n = 0;

// Read input
rl.on("line", (line) => {
  lineCount++;

  if (lineCount === 1) {
    // First line contains n
    n = parseInt(line.trim());
  } else if (lineCount === 2) {
    // Second line contains n space-separated values
    const values = line.trim().split(" ").map(BigInt);
    processValues(values, n);
    rl.close();
  }
});

function processValues(values, n) {
  // Initialize array to track longest subsequence ending with each digit
  const len_upto = Array(10).fill(0);

  for (let z = 0; z < n; z++) {
    let a = values[z];
    const digits = Array(10).fill(0);

    // Extract digits from the current number
    if (a === 0n) {
      digits[0] = 1;
    } else {
      while (a !== 0n) {
        const x = Number(a % 10n);
        digits[x] = 1;
        a = a / 10n;
      }
    }

    // Find the maximum subsequence length we can achieve
    let max = 1;
    for (let i = 0; i < 10; i++) {
      if (digits[i] === 1 && len_upto[i] >= max) {
        max = len_upto[i] + 1;
      }
    }

    // Update subsequence lengths for all digits in the current number
    for (let i = 0; i < 10; i++) {
      if (digits[i] === 1) {
        len_upto[i] = max;
      }
    }
  }

  // Find the maximum subsequence length
  let ans = 0;
  for (let i = 0; i < 10; i++) {
    if (len_upto[i] > ans) {
      ans = len_upto[i];
    }
  }

  console.log(ans);
}