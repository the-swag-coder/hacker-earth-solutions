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

  for (let i = 1; i <= t; i++) {
    const s = input[i];
    const n = s.length;
    let c = 0;

    for (let j = 4; j < n - 4; j++) {
      const ch = s[j].toLowerCase();
      if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
        c++;
      }
    }

    const result = `${c + 4}/${n}`;
    console.log(result);
  }
});
