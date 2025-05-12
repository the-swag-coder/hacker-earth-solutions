const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  const q = input[0];
  const a = input.slice(1);
  const maxVal = Math.max(...a);

  // Step 1: Precompute up to maxVal
  const precomputed = new Array(maxVal + 1).fill(0);

  function isPalindrome(s) {
    return s === s.split("").reverse().join("");
  }

  let count = 0;
  for (let i = 1; i <= maxVal; i++) {
    const decStr = i.toString();
    const binStr = i.toString(2);
    if (isPalindrome(decStr) && isPalindrome(binStr)) {
      count++;
    }
    precomputed[i] = count;
  }

  // Step 2: Answer each query in O(1)
  for (let i = 0; i < q; i++) {
    console.log(precomputed[a[i]]);
  }
});
