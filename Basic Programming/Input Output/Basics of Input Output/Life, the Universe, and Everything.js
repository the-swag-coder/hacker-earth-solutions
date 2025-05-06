const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let shouldProcess = true;

// Read input line by line
rl.on('line', (line) => {
  const num = parseInt(line.trim());

  if (num === 42) {
    shouldProcess = false; // Stop processing further numbers
  }

  if (shouldProcess) {
    console.log(num);
  }
});