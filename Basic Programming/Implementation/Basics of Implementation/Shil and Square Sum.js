const readline = require("readline");
const MOD = 1000000007;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ar = new Array(1200050).fill(0);
const pref = new Array(1200050).fill(0);
let s = 0, deriv = 0;

let lineCount = 0;
let n = 0, k = 0;

rl.on('line', (line) => {
  if (lineCount === 0) {
    // First line: n and k values
    const [n_val, k_val] = line.trim().split(' ').map(Number);
    n = n_val;
    k = k_val;
    lineCount++;
  } else {
    // Second line: array values
    const values = line.trim().split(' ').map(Number);
    for (let i = 1; i <= n; i++) {
      ar[i] = values[i-1];
    }
    processArray();
    rl.close();
  }
});

function processArray() {
  // Calculate prefix sums
  for (let i = 1; i <= n; i++) {
    pref[i] = (pref[i - 1] + ar[i]) % MOD;
  }

  // Calculate initial sum s
  for (let i = 1; i <= k; i++) {
    s = (s + ((((i * i) % MOD) * ar[i]) % MOD)) % MOD;
  }

  // Output the first sum
  process.stdout.write(s.toString());

  // Calculate initial derivative term
  for (let i = 2; i <= k; i++) {
    deriv = (deriv + ((2 * i - 1) * ar[i]) % MOD) % MOD;
  }

  // Calculate and output remaining sums
  for (let i = 2; i <= n - k + 1; i++) {
    // Update s by removing the contribution of the element leaving the window
    s = (s - ar[i - 1] + MOD) % MOD;

    // Update s by subtracting the derivative term
    s = (s - deriv + MOD) % MOD;

    // Update the derivative term
    deriv = (deriv - 3 * ar[i] + MOD) % MOD;
    deriv = (deriv - (2 * ((pref[i + k - 1] - pref[i] + MOD) % MOD)) + MOD) % MOD;

    // Update s by adding the contribution of the new element entering the window
    s = (s + ((((k * k) % MOD) * ar[i + k - 1]) % MOD)) % MOD;

    // Update the derivative term with the new element
    deriv = (deriv + ((2 * k + 1) * ar[i + k - 1]) % MOD) % MOD;

    // Output the current sum
    process.stdout.write(" " + s.toString());
  }

  // End line
  process.stdout.write("\n");
}