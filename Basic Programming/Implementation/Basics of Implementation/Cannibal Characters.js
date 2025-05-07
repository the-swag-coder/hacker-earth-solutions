const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;
  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++]);
    const s = input[idx++];

    const a = Array(26).fill(0);
    for (let i = 0; i < n; i++) {
      a[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let ans = 0;
    for (let i = 0; i < 26; i++) {
      ans += Math.floor(a[i] / 2);
    }

    console.log(ans);
  }
});
