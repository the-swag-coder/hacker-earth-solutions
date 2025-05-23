const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

rl.on("line", function (line) {
  inputLines.push(line.trim());
});

rl.on("close", function () {
  let idx = 0;
  const T = parseInt(inputLines[idx++], 10);

  for (let t = 0; t < T; t++) {
    const n = parseInt(inputLines[idx++], 10);
    const nums = inputLines[idx++].split(' ').map(Number);

    const a = [], b = [];

    for (const num of nums) {
      if (bits(num)) {
        a.push(num);
      } else {
        b.push(num);
      }
    }

    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    console.log([...b, ...a].join(' '));
  }
});

function bits(n) {
  let parity = 0;
  while (n > 0) {
    parity ^= 1;
    n &= (n - 1);
  }
  return parity;
}
