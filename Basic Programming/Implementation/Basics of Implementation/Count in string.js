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
  for (let i = 0; i < T; i++) {
    const S = input[idx++];
    const k = input[idx++];
    const out_ = S.split('').filter(ch => ch === k).length;
    console.log(out_);
  }
});
