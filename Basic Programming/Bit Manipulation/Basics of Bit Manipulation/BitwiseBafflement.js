const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve(n, a) {
  // Helper function to count number of set bits
  function popcount(n) {
    let count = 0;
    while (n) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }

  let sg = 0;
  let x = new Array(n + 1);
  let s = new Array(n + 1);

  x[0] = 0;
  s[0] = 0;

  // Build prefix arrays
  for (let i = 0; i < n; i++) {
    sg ^= a[i];
    x[i + 1] = popcount(sg) % 2;
    s[i + 1] = s[i] + x[i];
  }

  let ret = 0;
  let b = [], c = [];
  c.push([0, 0]);

  for (let p = 0; p < n; p++) {
    let val = a[p];
    let s0 = 0;
    b = [];
    b.push([val, p + 1]);

    for (let t of c) {
      let new_val = val & t[0];
      if (new_val !== val) {
        val = new_val;
        b.push([val, t[1]]);
      }
    }

    c = [...b]; // swap(c, b)

    for (let i = 0; i < c.length; i++) {
      if (popcount(c[i][0]) % 2 === 1) {
        let j = (i + 1 < c.length ? c[i + 1][1] : 0);
        let k = c[i][1];
        if (x[p + 1] === 0) {
          s0 += (k - j) - (s[k] - s[j]);
        } else {
          s0 += s[k] - s[j];
        }
      }
    }
    ret += s0;
  }

  return ret;
}

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
});

rl.on('close', () => {
  const T = parseInt(input[0]);
  let idx = 1;

  for (let t = 0; t < T; t++) {
    const n = parseInt(input[idx++]);
    const a = input[idx++].split(' ').map(Number);

    const result = solve(n, a);
    console.log(result);
  }
});