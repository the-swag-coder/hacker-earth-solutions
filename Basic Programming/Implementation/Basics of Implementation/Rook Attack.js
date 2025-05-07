const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const [n, m] = input[0].split(' ').map(Number);
  const a = [];
  for (let i = 1; i <= n; i++) {
    a.push(input[i].split(' ').map(BigInt));
  }

  const row = Array(n).fill(0n);
  const col = Array(m).fill(0n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      row[i] += a[i][j];
      col[j] += a[i][j];
    }
  }

  let maxi = -1n;
  let x = 0, y = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const val = row[i] + col[j] - 2n * a[i][j];
      if (val > maxi) {
        maxi = val;
        x = i;
        y = j;
      }
    }
  }

  console.log((x + 1) + ' ' + (y + 1));
});
