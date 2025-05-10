const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const MOD = 1000000007n;

// Cache for storing powers of 2
const powerOf2Cache = new Map();

// Optimized binary exponentiation with memoization
function binpow(a, n) {
  // Convert inputs to BigInt
  a = BigInt(a);
  n = BigInt(n);

  // Special case for powers of 2
  if (a === 2n) {
    if (powerOf2Cache.has(n)) {
      return powerOf2Cache.get(n);
    }
  }

  let res = 1n;
  while (n > 0n) {
    if (n % 2n === 1n) {
      res = (res * a) % MOD;
    }
    a = (a * a) % MOD;
    n = n / 2n;
  }

  // Cache the result for powers of 2
  if (a === 2n) {
    powerOf2Cache.set(n, res);
  }

  return res;
}

// Precompute common powers of 2
function precomputePowers(maxN) {
  for (let i = 1n; i <= maxN; i++) {
    if (!powerOf2Cache.has(i)) {
      if (i === 1n) {
        powerOf2Cache.set(i, 2n);
      } else if (i % 2n === 0n) {
        const halfPower = powerOf2Cache.get(i / 2n);
        powerOf2Cache.set(i, (halfPower * halfPower) % MOD);
      } else {
        const prevPower = powerOf2Cache.get(i - 1n);
        powerOf2Cache.set(i, (prevPower * 2n) % MOD);
      }
    }
  }
}

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(input[0]);
  const a = input[1].split(" ").map(Number);

  // Calculate frequencies
  const freq = new Array(1001).fill(0);
  let maxFreq = 0;
  for (let i = 0; i < n; i++) {
    freq[a[i]]++;
    maxFreq = Math.max(maxFreq, freq[a[i]]);
  }

  // Precompute powers of 2 for all possible frequencies
  precomputePowers(BigInt(maxFreq + n)); // Max possible power we might need

  // Create accumulate array and vector of numbers with non-zero frequencies
  const accumulate = new Array(1001).fill(0);
  const v = [];
  for (let i = 1; i <= 1000; i++) {
    if (freq[i] > 0) v.push(i);
    accumulate[i] = accumulate[i - 1] + freq[i];
  }

  // Pre-calculate 2^freq[x] - 1 for all unique values
  const power2FreqMinus1 = new Map();
  for (const val of v) {
    const f = BigInt(freq[val]);
    const pow2 = binpow(2n, f);
    power2FreqMinus1.set(val, (pow2 - 1n + MOD) % MOD);
  }

  let res = 0n;
  for (let i = 0; i < v.length; i++) {
    const x = BigInt(v[i]);
    const freqX = BigInt(freq[v[i]]);

    // First term calculation
    const pow2X = binpow(2n, freqX);
    const term1 = (pow2X - freqX - 1n + MOD) % MOD;
    res = (res + (x * term1) % MOD) % MOD;

    // Process pairs
    for (let j = i + 1; j < v.length; j++) {
      const y = BigInt(v[j]);
      const xy = BigInt(accumulate[v[j] - 1] - accumulate[v[i]]);

      // Get precomputed values
      const amountij = binpow(2n, xy);
      const amounti = power2FreqMinus1.get(v[i]);
      const amountj = power2FreqMinus1.get(v[j]);

      // Compute the result in stages to reduce risk of overflow
      let flag = (amounti * amountj) % MOD;
      flag = (flag * amountij) % MOD;
      flag = (flag * (x | y)) % MOD;

      res = (res + flag) % MOD;
    }
  }

  console.log(res.toString());
});