const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const n = parseInt(input[0]);
  const a = input[1].split(' ').map(Number);

  const mp = new Map();
  const arr = Array(25).fill(0);
  const key = arr.join(',');
  mp.set(key, 1);

  let res = 0n; // use BigInt for large sums

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 25; j++) {
      while (a[i] % prime[j] === 0) {
        arr[j] = (arr[j] + 1) % 3;
        a[i] /= prime[j];
      }
    }
    const arrKey = arr.join(',');
    const count = mp.get(arrKey) || 0;
    res += BigInt(count);
    mp.set(arrKey, count + 1);
  }

  console.log(res.toString());
});
