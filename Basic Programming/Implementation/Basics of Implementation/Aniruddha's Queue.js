const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++]);
    const d = input[idx++].split(' ').map(Number);
    let m = parseInt(input[idx++]);

    // Calculate total damage in one cycle
    const sum = d.reduce((acc, val) => acc + val, 0);

    // Skip complete cycles if sum > 0
    if (sum > 0) {
      m %= sum;
      // If m becomes 0 after modulo, we need the last position
      if (m === 0) {
        // Find the last non-zero element
        let lastNonZeroIndex = n - 1;
        while (lastNonZeroIndex >= 0 && d[lastNonZeroIndex] === 0) {
          lastNonZeroIndex--;
        }
        console.log(lastNonZeroIndex + 1);
        continue;
      }
    }

    // Find position in the remaining cycle
    let pos = 0;
    while (pos < n) {
      if (m <= d[pos]) break;
      m -= d[pos];
      pos++;
    }

    // Output the 1-indexed position
    console.log(pos + 1);
  }
});