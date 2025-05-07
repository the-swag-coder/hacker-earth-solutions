const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mod = BigInt(1000000007);

// Iterative modular exponentiation using BigInt
function power(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  let result = BigInt(1);
  while (b > 0) {
    if (b % BigInt(2) === BigInt(1)) {
      result = (result * a) % mod;
    }
    a = (a * a) % mod;
    b = b / BigInt(2);
  }
  return result;
}

let input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const n = parseInt(input[0]);
  const a = input[1].split(' ').map(BigInt);
  const M = new Map();

  for (let i = 0; i < n; i++) {
    M.set(a[i], (M.get(a[i]) || BigInt(0)) + BigInt(1));
  }

  let ans = BigInt(0);
  for (const [key, val] of M.entries()) {
    if (key !== BigInt(0)) {
      ans = (ans + power(2, val - BigInt(1))) % mod;
    } else {
      ans = (ans + power(2, val) - BigInt(1) + mod) % mod;
    }
  }

  console.log(ans.toString());
});
