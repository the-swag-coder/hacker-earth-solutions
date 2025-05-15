const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line.trim()));
rl.on('close', () => {
  let tests = parseInt(inputLines[0]);
  for (let x = 1; x <= tests; x++) {
    let a = inputLines[x].split('');
    let count = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] === 'B') {
        if (i - 1 >= 0 && a[i - 1] === 'W') {
          count++;
          a[i - 1] = '-';
        }
        if (i - 2 >= 0 && a[i - 2] === 'W') {
          count++;
          a[i - 2] = '-';
        }
        if (i + 1 < a.length && a[i + 1] === 'W') {
          count++;
          a[i + 1] = '-';
        }
        if (i + 2 < a.length && a[i + 2] === 'W') {
          count++;
          a[i + 2] = '-';
        }
      }
    }

    console.log(count);
  }
});
