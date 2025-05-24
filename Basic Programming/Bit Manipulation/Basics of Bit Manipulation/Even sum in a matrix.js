const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let idx = 0;
  const [nStr, mStr] = input[idx++].split(" ");
  const n = parseInt(nStr);
  const m = parseInt(mStr);

  // Use Uint8Array for better memory efficiency and speed
  const table = [];
  for (let i = 0; i <= n; i++) {
    table[i] = new Uint8Array(m + 1);
  }

  // Fill the table with XOR prefix sums
  for (let i = 0; i < n; i++) {
    const row = input[idx++].split(" ");
    for (let j = 0; j < m; j++) {
      const x = parseInt(row[j]);
      table[i + 1][j + 1] = table[i + 1][j] ^ table[i][j] ^ table[i][j + 1] ^ (x & 1);
    }
  }

  let ans = 0;

  // Precompute all row pairs to avoid redundant work
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      // Count XOR differences using bitwise operations
      let c = 0;
      const row1 = table[i];
      const row2 = table[j];

      // Unroll loop for better performance
      let k = 0;
      for (; k <= m - 4; k += 4) {
        c += (row1[k] ^ row2[k]) +
          (row1[k+1] ^ row2[k+1]) +
          (row1[k+2] ^ row2[k+2]) +
          (row1[k+3] ^ row2[k+3]);
      }

      // Handle remaining elements
      for (; k <= m; k++) {
        c += row1[k] ^ row2[k];
      }

      // Calculate contribution to answer
      const term1 = (c * (c - 1)) >>> 1; // Use unsigned right shift for division by 2
      const remaining = m - c + 1;
      const term2 = (remaining * (remaining - 1)) >>> 1;
      ans += term1 + term2;
    }
  }

  console.log(ans);
});