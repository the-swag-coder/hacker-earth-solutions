const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;

  for (let i = 0; i < t; i++) {
    const c = parseInt(input[idx++]);
    console.log("Alice");
  }
});
