const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [l, r, k] = line.split(' ').map(Number);

  let res = 0;
  // Calculate how many numbers in range [l, r] are divisible by k
  // First find the first number in range that is divisible by k
  const firstDivisible = l + ((k - l % k) % k);

  if (firstDivisible <= r) {
    // Calculate total count using math: floor((last - first) / k) + 1
    // Where last is the last number in range divisible by k
    // and first is the first number in range divisible by k
    const lastDivisible = r - (r % k);
    res = Math.floor((lastDivisible - firstDivisible) / k) + 1;
  }

  console.log(res);
  rl.close();
});