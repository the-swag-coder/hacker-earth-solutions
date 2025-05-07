const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line.trim());
});

rl.on('close', () => {
  let n = parseInt(inputLines[0]);
  for (let i = 1; i <= n; i++) {
    let x = parseInt(inputLines[i]);
    while (true) {
      let sum = getDigitSum(x);
      if (sum % 4 === 0) {
        console.log(x);
        break;
      }
      x++;
    }
  }
});

function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
