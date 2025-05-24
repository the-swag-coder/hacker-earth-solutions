process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const tokens = input.trim().split(/\s+/).map(Number);
  let idx = 0;

  const n = tokens[idx++];
  const m = tokens[idx++];

  // Initialize 2D boolean arrays to simulate bitsets
  const table = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

  // Construct the table based on the parity XOR pattern
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      const x = tokens[idx++];
      table[i][j] = table[i][j - 1] ^ table[i - 1][j] ^ table[i - 1][j - 1] ^ (x % 2);
    }
  }

  let ans = 0n;
  for (let i = 0; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      let c = 0;
      for (let k = 1; k <= m; ++k) {
        if (table[i][k] !== table[j][k]) c++;
      }
      const bc = BigInt(c);
      const bm = BigInt(m);
      ans += bc * (bc - 1n) / 2n + (bm - bc + 1n) * (bm - bc) / 2n;
    }
  }

  console.log(ans.toString());
});
