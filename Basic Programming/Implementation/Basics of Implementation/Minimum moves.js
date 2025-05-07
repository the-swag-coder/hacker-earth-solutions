const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', line => {
  input.push(line.trim());
});

rl.on('close', () => {
  const t = parseInt(input[0]);

  for (let i = 1; i <= t; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (0 <= y && y <= x) {
      console.log(x);
    } else {
      console.log(-1);
    }
  }
});
