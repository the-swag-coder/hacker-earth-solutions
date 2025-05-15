const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let t = null;
let lineIndex = 0;

rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (t === null && inputLines.length > 0) {
    t = parseInt(inputLines[0], 10);
  }
});

rl.on('close', () => {
  lineIndex = 1;
  for (let _ = 0; _ < t; _++) {
    const n = parseInt(inputLines[lineIndex++], 10);
    const arr = inputLines[lineIndex++].split(' ').map(Number);

    arr.sort((a, b) => a - b);

    let ans = 0;
    for (let i = n - 1; i >= 0; i--) {
      ans++;
      if (i - 1 >= 0 && arr[i] - arr[i - 1] === 1) {
        i--;
      }
    }

    console.log(ans);
  }
});
