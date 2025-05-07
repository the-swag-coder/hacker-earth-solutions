const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    const [aStr, bStr] = input[i].split(' ');
    const a = BigInt(aStr);
    const b = BigInt(bStr);
    const x = lcm(a, b);
    console.log(`${x / a} ${x / b}`);
  }
});

function gcd(a, b) {
  if (b === 0n) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}
