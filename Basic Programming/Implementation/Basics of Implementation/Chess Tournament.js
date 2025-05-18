function main(input) {
  const lines = input.trim().split('\n');
  let lineIdx = 0;

  const n = parseInt(lines[lineIdx++]);
  const t = 1 << n;

  const A = Array.from({ length: t }, () => Array(t).fill(0));
  let i = 0, j = 0;

  while (i < t) {
    if (j >= i) {
      i++;
      j = 0;
      continue;
    }

    const values = lines[lineIdx++].trim().split(' ').map(Number);
    for (let k = 0; k < values.length; k++) {
      A[i][j + k] = values[k];
    }
    j += values.length;
  }

  let queue = [];
  for (let i = 0; i < t; i++) queue.push(i);

  while (queue.length > 1) {
    const p1 = queue.shift();
    const p2 = queue.shift();

    if (p1 > p2) {
      queue.push(A[p1][p2] ? p1 : p2);
    } else {
      queue.push(A[p2][p1] ? p2 : p1);
    }
  }

  console.log(queue[0] + 1);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';
rl.on('line', line => input += line + '\n');
rl.on('close', () => main(input));
