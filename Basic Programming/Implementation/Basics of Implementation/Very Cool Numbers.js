const readline = require('readline');

const MAX = 100001;
const v = new Array(MAX).fill(0);

function find(x) {
  const arr = new Array(32).fill(0);
  let temp = x;
  for (let i = 0; i < 32; i++) {
    arr[i] = temp & 1;
    temp >>= 1;
  }
  let cnt = 0;
  for (let i = 0; i < 30; i++) {
    if (arr[i] === 1 && arr[i + 1] === 0 && arr[i + 2] === 1) {
      cnt++;
    }
  }
  v[x] = cnt;
}

for (let i = 0; i < MAX; i++) {
  find(i);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let t = null;

rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (t === null && inputLines.length > 0) {
    t = parseInt(inputLines[0], 10);
  }
  if (t !== null && inputLines.length === 1 + t) {
    rl.close();
  }
});

rl.on('close', () => {
  for (let i = 1; i <= t; i++) {
    const [n, k] = inputLines[i].split(' ').map(Number);
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
      if (v[j] >= k) cnt++;
    }
    console.log(cnt);
  }
  process.exit(0);
});
