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
  const t = parseInt(input[idx++]);

  for (let tc = 0; tc < t; tc++) {
    const [nStr, kStr] = input[idx++].split(" ");
    const n = parseInt(nStr);
    let k = BigInt(kStr);
    const a = input[idx++].split(" ").map(BigInt);
    let ans = 0n;

    for (let i = 61; i >= 0; i--) {
      const bit = 1n << BigInt(i);
      let minCost = null;
      let minIdx = -1;

      for (let j = 0; j < n; j++) {
        if ((a[j] & bit) !== 0n) {
          minCost = 0n;
          minIdx = j;
          break;
        } else {
          const remainder = a[j] & (bit - 1n);
          const cost = bit - remainder;
          if (minCost === null || cost < minCost) {
            minCost = cost;
            minIdx = j;
          }
        }
      }

      if (minCost !== null && minCost <= k) {
        k -= minCost;
        a[minIdx] += minCost;
        ans |= bit;
      }
    }

    console.log(ans.toString());
  }
});
