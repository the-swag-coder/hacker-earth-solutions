const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  const t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    const [n, b1, b2] = input[i].split(' ').map(Number);
    const x = Math.abs(b1 - b2) - 1;
    const y = n - x - 2;
    let ans = 0;

    if (x >= 2) {
      ans += (x - 1) * y;
      if (x >= 3) {
        ans += x - 2;
        ans += (x - 2) * (x - 3);
      }
    }

    if (y >= 2) {
      ans += (y - 1) * x;
      ans += y - 2;
      ans += (y - 2) * (y - 3);
    }

    console.log(ans);
  }
});
