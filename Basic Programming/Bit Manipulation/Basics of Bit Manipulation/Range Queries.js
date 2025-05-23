const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", line => inputLines.push(line.trim()));
rl.on("close", () => {
  const MAX = 100001;
  const BITS = 20;
  const c = Array.from({ length: MAX }, () => Array(BITS).fill(0));

  for (let i = 1; i < MAX; i++) {
    for (let j = 0; j < BITS; j++) {
      c[i][j] = c[i - 1][j] + ((i & (1 << j)) ? 1 : 0);
    }
  }

  let idx = 0;
  const q = parseInt(inputLines[idx++], 10);
  const output = [];

  for (let qi = 0; qi < q; qi++) {
    const [l, r, x] = inputLines[idx++].split(' ').map(Number);
    output.push((c[r][x - 1] - c[l - 1][x - 1]).toString());
  }

  process.stdout.write(output.join('\n') + '\n');
});
