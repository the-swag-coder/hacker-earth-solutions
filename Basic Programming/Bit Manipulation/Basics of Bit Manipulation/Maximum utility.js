const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  const func = (x, a, b, n) => {
    let res = 0n;
    for (let i = 1; i <= n; i++) {
      if ((x | a[i]) === x) {
        res += b[i];
      }
    }
    return res;
  };

  while (t--) {
    let [n, k] = input[idx++].split(" ").map(Number);
    const a = [0];
    const b = [0];

    input[idx].split(" ").forEach(num => a.push(parseInt(num)));
    idx++;
    input[idx].split(" ").forEach(num => b.push(BigInt(num)));
    idx++;

    let ans = func(k, a, b, n);
    let p = 0;

    for (let i = 30; i >= 0; i--) {
      const bit = 1 << i;
      if (k & bit) {
        ans = ans > func(p + bit - 1, a, b, n) ? ans : func(p + bit - 1, a, b, n);
        p += bit;
      }
    }

    console.log(ans.toString());
  }
});
