const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => {
  inputLines.push(line.trim());
});

rl.on('close', () => {
  let t = parseInt(inputLines[0]);
  for (let i = 1; i <= t; i++) {
    let [n, m, k] = inputLines[i].split(' ').map(Number);
    let result = Math.floor((n + k - 1) / k) + Math.floor((m + k - 1) / k);
    console.log(result);
  }
});
