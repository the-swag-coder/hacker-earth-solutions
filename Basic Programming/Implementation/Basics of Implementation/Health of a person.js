const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let lineIndex = 0;
  const t = parseInt(input[lineIndex++]);
  const results = [];

  for (let tc = 0; tc < t; tc++) {
    const [n, m] = input[lineIndex++].split(' ').map(Number);
    const a = input[lineIndex++].split(' ').map(Number);
    const b = input[lineIndex++].split(' ').map(Number);

    const unhealthyDays = new Int32Array(n).fill(-1);

    for (let i = 1; i <= m; i++) {
      const threshold = b[i - 1];
      for (let j = i - 1; j < n; j += i) {
        if (unhealthyDays[j] === -1 && a[j] <= threshold) {
          unhealthyDays[j] = i;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      results.push(unhealthyDays[i]);
    }
  }

  process.stdout.write(results.join('\n') + '\n');
});
