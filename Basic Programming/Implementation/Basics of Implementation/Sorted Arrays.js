const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));

rl.on("close", () => {
  const n = parseInt(input[0]);
  const a = [0, ...input[1].split(' ').map(Number)];
  let ans = 0n;

  for (let i = 1; i <= n; i++) {
    if (a[i] <= a[i - 1]) {
      ans += BigInt(a[i - 1] - a[i] + 1);
      a[i] = a[i - 1] + 1;
    }
  }

  console.log(ans.toString());
});
