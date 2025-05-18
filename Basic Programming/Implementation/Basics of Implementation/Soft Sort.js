const MOD = 1000000007;
const MAX = 1000000;

const fact = new Array(MAX + 1);
fact[0] = 1n;

for (let i = 1; i <= MAX; i++) {
  fact[i] = (fact[i - 1] * BigInt(i)) % BigInt(MOD);
}

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
    const n = parseInt(input[idx++]);

    let ans = (3n * fact[n] + 3n) % BigInt(MOD);
    console.log(ans.toString());
  }
});
