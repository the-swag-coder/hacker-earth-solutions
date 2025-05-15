const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line.trim()));
rl.on('close', () => {
  const n = parseInt(inputLines[0]);
  const arr = inputLines[1].split(' ').map(Number);

  const maxRight = Array(n).fill(0);
  const maxLeft = Array(n).fill(0);

  maxRight[0] = arr[0];
  for (let i = 1; i < n; i++) {
    maxRight[i] = Math.max(maxRight[i - 1], arr[i]);
  }

  maxLeft[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    maxLeft[i] = Math.max(maxLeft[i + 1], arr[i]);
  }

  let result = ["1"];
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] === maxLeft[i] || arr[i] === maxRight[i]) {
      result.push((i + 1).toString());
    }
  }
  result.push(n.toString());
  console.log(result.join(' '));
});
