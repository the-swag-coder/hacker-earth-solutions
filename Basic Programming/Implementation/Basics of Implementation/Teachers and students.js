const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mod = 1000000007n; // BigInt constant

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  const T = parseInt(input[0]);
  let idx = 1;

  for (let t = 0; t < T; t++) {
    const N = BigInt(input[idx++]); // Use BigInt
    const K = BigInt(input[idx++]); // Unused, just like in Python
    const A = input[idx++].split(" ").map(BigInt); // Unused

    const result = fun(N);
    console.log(result.toString()); // Convert BigInt to string before printing
  }
});

function fun(N) {
  return modPow(modPow(2n, N, mod), 2n, mod);
}

// Modular exponentiation with BigInt
function modPow(base, exp, m) {
  let result = 1n;
  base = base % m;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % m;
    }
    base = (base * base) % m;
    exp = exp / 2n;
  }
  return result;
}
