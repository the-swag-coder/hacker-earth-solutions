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
  for (let _ = 0; _ < t; _++) {
    const n = parseInt(input[idx++]);
    const a = input[idx++].split(' ').map(Number);

    let x = -1 >>> 0;  // unsigned 32-bit max to emulate -1 for bitwise
    let y = 0;

    for (const num of a) {
      x &= num;
      y |= num;
    }

    const countOnes = (num) => num.toString(2).split('1').length - 1;

    const countX = countOnes(x);
    const countY = countOnes(y);

    console.log(1 << (countY - countX));
  }
});
