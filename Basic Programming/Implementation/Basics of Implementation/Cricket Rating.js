const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(...line.trim().split(/\s+/));
}).on('close', () => {
  const n = parseInt(input[0]);
  const arr = input.slice(1, n + 1).map(Number);

  let s = 0;
  let mx = 0;

  for (let i = 0; i < n; i++) {
    const r = arr[i];
    mx = Math.max(0, r + mx);
    s = Math.max(s, mx);
  }

  console.log(s);
});
