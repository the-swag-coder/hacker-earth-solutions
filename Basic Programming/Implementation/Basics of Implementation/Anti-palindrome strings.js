const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let t = null;

rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (t === null) {
    t = parseInt(line);
  } else if (inputLines.length === t + 1) {
    rl.close();
  }
});

rl.on('close', () => {
  for (let i = 1; i <= t; i++) {
    const inp = inputLines[i];
    const sorted = inp.split('').sort().join('');
    const reversed = sorted.split('').reverse().join('');
    if (sorted === reversed) {
      console.log(-1);
    } else {
      console.log(sorted);
    }
  }
});
