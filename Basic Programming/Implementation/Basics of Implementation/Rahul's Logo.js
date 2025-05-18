function f(n) {
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 1; j < n - i; j++) line += ' ';

    for (let j = 0; j < i + 1; j++)
      line += (j % 2 === 0) ? '/' : ' ';

    for (let j = 0; j < i + 1; j++)
      line += ((i - j) % 2 === 0) ? '\\' : ' ';

    console.log(line);
  }
}

function g(n) {
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < 2 + i; j++) line += ' ';

    for (let j = 0; j < n - i; j++)
      line += (j % 2 === 0) ? '\\' : ' ';

    for (let j = n - i; j > 0; j--)
      line += (j % 2 === 1) ? '/' : ' ';

    console.log(line);
  }
}

function main(input) {
  const n = parseInt(input.trim());
  f(n);
  g(n);
  f(n + 1);
  g(n + 1);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';
rl.on('line', line => input += line);
rl.on('close', () => main(input));
