const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let n;
const MOD = 1000000007; // 10^9 + 7

rl.on('line', (line) => {
  if (lineCount === 0) {
    // First line contains n (number of elements)
    n = parseInt(line);
    lineCount++;
  } else {
    // Second line contains n integers
    const elements = line.split(' ').map(Number);

    // Calculate the product modulo 10^9 + 7
    let ans = 1;
    for (let i = 0; i < n; i++) {
      // Multiply and take modulo to prevent overflow
      ans = (ans * elements[i]) % MOD;
    }

    // Print the result
    console.log(ans);

    // Close the readline interface
    rl.close();
  }
});