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
  const n = parseInt(lines[0]);

  // Calculate the sum
  let sum = 0;

  for (let i = 0; i < n; i++) {
    // Step 1: Calculate (n - i) // 2 (integer division)
    const term1 = Math.floor((n - i) / 2);

    // Step 2: Calculate (i + 1) * i * (term1 // 2)
    const result = Math.floor((i + 1) * i * term1 / 2);

    // Add to sum
    sum += result;
  }

  console.log(sum);
});