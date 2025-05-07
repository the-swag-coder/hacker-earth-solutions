const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let index = 0;
  const t = parseInt(input[index++]);

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[index++]);
    const s = input[index++];
    const tStr = input[index++];

    const cnt = Array(26).fill(0);

    for (const ch of tStr) {
      cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let wildcard = 0;
    for (const ch of s) {
      if (ch === '?') {
        wildcard++;
      } else {
        cnt[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
      }
    }

    for (let i = 0; i < 26; i++) {
      wildcard -= Math.max(0, cnt[i]);
    }

    console.log(wildcard < 0 ? "No" : "Yes");
  }
});
