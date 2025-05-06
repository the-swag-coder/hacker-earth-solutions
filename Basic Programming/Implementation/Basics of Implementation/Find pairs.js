const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let lineCount = 0;
let N;
let A = [];

rl.on('line', (line) => {
  inputLines.push(line);
  lineCount++;
  if (lineCount === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  N = parseInt(inputLines[0]);
  A = inputLines[1].split(' ').map(Number);

  const freq = new Map();

  for (let i = 0; i < N; i++) {
    const key = A[i] - i;
    freq.set(key, (freq.get(key) || 0) + 1);
  }

  let totalPairs = 0;
  for (const count of freq.values()) {
    totalPairs += count * (count - 1);
  }

  console.log(totalPairs);
});