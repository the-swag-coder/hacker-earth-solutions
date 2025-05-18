const readline = require('readline');

const MAX = 1000001;
const spf = new Array(MAX).fill(0);
const sumDivisors = new Array(MAX).fill(0);

for (let i = 2; i < MAX; ++i) {
  if (spf[i] === 0) {
    for (let j = i; j < MAX; j += i) {
      if (spf[j] === 0) {
        spf[j] = i;
      }
    }
  }
}

for (let i = 1; i < MAX; ++i) {
  for (let j = i; j < MAX; j += i) {
    sumDivisors[j] += i;
  }
}

for (let i = 1; i < MAX; ++i) {
  sumDivisors[i] -= i;
  sumDivisors[i] += sumDivisors[i - 1];
  spf[i] += spf[i - 1];
}

function solveQueries(queries) {
  return queries.map(n => (spf[n] + sumDivisors[n]) % n);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const T = parseInt(input[0]);
  const queries = input.slice(1, T + 1).map(Number);
  const results = solveQueries(queries);
  results.forEach(res => console.log(res));
});
