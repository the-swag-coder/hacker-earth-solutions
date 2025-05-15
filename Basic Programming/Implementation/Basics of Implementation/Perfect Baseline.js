const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let t = null;
let currentLine = 0;

rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (t === null && inputLines.length > 0) {
    t = parseInt(inputLines[0], 10);
  }
});

rl.on('close', () => {
  let lineIndex = 1;
  for (let test = 0; test < t; test++) {
    const [n, k] = inputLines[lineIndex].split(' ').map(Number);
    lineIndex++;

    const tab = [];
    for (let i = 0; i < n; i++) {
      tab.push(inputLines[lineIndex++]);
    }

    let result = '';
    for (let col = 0; col < k; col++) {
      let colChars = [];
      for (let row = 0; row < n; row++) {
        colChars.push(tab[row][col]);
      }
      colChars.sort();

      if (n % 2 === 0) {
        result += colChars[(n / 2) - 1];
      } else {
        result += colChars[Math.floor(n / 2)];
      }
    }
    console.log(result);
  }
});
