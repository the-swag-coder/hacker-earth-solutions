const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the square root of a BigInt
function bigIntSqrt(n) {
  let x = n;
  let y = (x + 1n) / 2n;

  while (y < x) {
    x = y;
    y = (x + n / x) / 2n;
  }
  return x;
}

// Function to find the minimum of BigInt values
function bigIntMin(a, b) {
  return a < b ? a : b;
}

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    let n = BigInt(input[idx++]);

    // Calculate x using BigInt square root function
    let x = (bigIntSqrt(8n * n + 9n) - 3n) / 2n;
    let ans = 2n * (n - x);

    // Use the custom bigIntMin function to find the minimum of the BigInt values
    ans = bigIntMin(bigIntMin(ans, 2n * n), (n * (n + 1n)) / 2n);

    console.log(ans.toString());
  }
});
