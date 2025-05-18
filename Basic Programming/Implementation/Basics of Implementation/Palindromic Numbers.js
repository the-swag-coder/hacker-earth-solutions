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

  for (let _ = 0; _ < t; _++) {
    const [a, b] = input[idx++].split(' ').map(Number);
    let count = 0;

    for (let i = a; i <= b; i++) {
      if (isPalindrome(i)) {
        count++;
      }
    }

    console.log(count);
  }
});

function isPalindrome(num) {
  let rev = 0, c = num;
  while (c > 0) {
    rev = rev * 10 + (c % 10);
    c = Math.floor(c / 10);
  }
  return rev === num;
}
