const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', function (line) {
  inputLines.push(line.trim());
});

rl.on('close', function () {
  let currentLine = 0;
  const t = parseInt(inputLines[currentLine++]);
  for (let _ = 0; _ < t; _++) {
    const n = parseInt(inputLines[currentLine++]);
    const arr = inputLines[currentLine++].split(' ').map(Number);

    let c = 1;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] === 1 && arr[i + 1] === 0) {
        c++;
      }
    }
    console.log(c);
  }
});
