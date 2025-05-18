const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;

  for (let _ = 0; _ < t; _++) {
    const s = input[idx++];
    let prev = 'a'.charCodeAt(0);
    const diffs = [];

    for (const ch of s) {
      let diff = ch.charCodeAt(0) - prev;

      if (diff < -12) {
        diff = 26 - Math.abs(diff);
      } else if (diff > 13) {
        diff = Math.abs(diff) - 26;
      }

      diffs.push(diff);
      prev = ch.charCodeAt(0);
    }

    console.log(diffs.join(' '));
  }
});
