const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const T = parseInt(input[0]);
  let idx = 1;

  for (let t_i = 0; t_i < T; t_i++) {
    const N = parseInt(input[idx++]);
    const A = input[idx++].split(' ').map(Number);
    const K = parseInt(input[idx++]);
    console.log(minUpdates(N, A, K));
  }
});

function minUpdates(N, A, K) {
  if (N % 2 !== 0) return -1;

  let count_odd = 0, count_even = 0, req_odd = 0, req_even = 0;
  const od = new Map();
  const ev = new Map();

  for (let i = 0; i < N; i++) {
    if (A[i] % 2 === 1 && !od.has(A[i])) {
      count_odd++;
      od.set(A[i], true);
      if (A[i] <= K) req_odd++;
    } else if (A[i] % 2 === 0 && !ev.has(A[i])) {
      count_even++;
      ev.set(A[i], true);
      if (A[i] <= K) req_even++;
    }
  }

  count_odd = Math.max(0, Math.floor(N / 2) - count_odd);
  count_even = Math.max(0, Math.floor(N / 2) - count_even);

  req_even = Math.floor(K / 2) - req_even;
  req_odd = (K - Math.floor(K / 2)) - req_odd;

  if (req_even < count_even || req_odd < count_odd) return -1;
  return count_even + count_odd;
}
