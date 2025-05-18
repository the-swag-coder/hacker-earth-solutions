const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    const [n, a, b, c, d, move] = input[index++].split(' ').map(Number);

    const x = n - a + move;
    const y = n - c;
    const z = Math.abs(b - d);

    if (x >= y && z <= x) {
      console.log("Draw");
    } else {
      console.log("White Wins");
    }
  }
});
