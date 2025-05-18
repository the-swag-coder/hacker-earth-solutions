const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', line => {
  input = line.trim();
}).on('close', () => {
  const w = 'love';
  let i = 0;

  for (const ch of input) {
    if (ch === w[i]) {
      i++;
    }
    if (i > 3) break;
  }

  if (i === 4) {
    console.log("I love you, too!");
  } else {
    console.log("Let us breakup!");
  }
});
