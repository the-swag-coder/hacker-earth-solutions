const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', (line) => {
  input = line.trim();
  rl.close();
});

rl.on('close', () => {
  let x = 0, y = 0;
  for (let c of input) {
    if (c === 'L') x--;
    else if (c === 'R') x++;
    else if (c === 'U') y++;
    else if (c === 'D') y--;
  }
  console.log(`${x} ${y}`);
});
