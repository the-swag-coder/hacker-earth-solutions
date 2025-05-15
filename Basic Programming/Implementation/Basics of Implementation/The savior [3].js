const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line.trim()));
rl.on('close', () => {
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  for (let test = 0; test < t; test++) {
    const n = parseInt(inputLines[idx++]);
    const a = inputLines[idx++].split(' ').map(Number);

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (a[i] !== a[j] && (a[i] % 2 === a[j] % 2)) {
          count++;
        }
      }
    }

    console.log(count);
  }
});
