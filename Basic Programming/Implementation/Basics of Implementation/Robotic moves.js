const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line.trim());
});

// Process input when EOF is reached
rl.on('close', () => {
  processInput();
});

function processInput() {
  let t = parseInt(inputLines[0], 10);
  for (let i = 1; i <= t; i++) {
    let n = BigInt(inputLines[i]);

    // Calculate n * (n + 1) using BigInt to handle large numbers
    const result = n * (n + 1n);

    console.log(result.toString());
  }
}