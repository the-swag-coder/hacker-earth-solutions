const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  let index = 0;
  let tests = parseInt(input[index++]);

  while (tests--) {
    const n = parseInt(input[index++]);
    const p = input[index++].split(' ').map(Number);
    const cnt = new Array(n).fill(0);

    const [xInit, a, b, t] = input[index++].split(' ').map(Number);
    let x = xInit;
    let ans = 0;

    for (let i = 1; i <= t; i++) {
      cnt[x]++;
      if (cnt[x] >= p[x]) {
        ans++;
        cnt[x] = 0;
      }
      x = (BigInt(x) * BigInt(a) + BigInt(b)) % BigInt(n);
      x = Number(x); // convert BigInt back to Number for array indexing
    }

    console.log(ans);
  }
});
