const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const t = BigInt(inputLines[0]);
  for (let i = 1; i <= t; i++) {
    const n = BigInt(inputLines[i]);
    let ans = BigInt(1) + (n - BigInt(1)) * n;
    console.log(ans.toString());
  }
});
