function generateCubeSums() {
  const a = Array(101).fill(0).map((_, i) => i * i * i);
  const b = [];
  for (let i = 1; i < 101; i++) {
    for (let j = i; j < 101; j++) {
      b.push(a[i] + a[j]);
    }
  }
  b.sort((x, y) => x - y);
  return b;
}

function processTestCases(t, testCases) {
  const b = generateCubeSums();

  for (let test = 0; test < t; test++) {
    const n = testCases[test];
    let k = 1;
    let r = -1;

    for (let i = 0; i < b.length - 1; i++) {
      if (b[i] >= n) break;
      if (b[i] === b[i + 1]) {
        k++;
        r = b[i];
      }
    }

    if (k === 1) {
      console.log(-1);
    } else {
      console.log(r);
    }
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line));
rl.on('close', () => {
  const t = parseInt(inputLines[0]);
  const testCases = inputLines.slice(1).map(Number);
  processTestCases(t, testCases);
});
