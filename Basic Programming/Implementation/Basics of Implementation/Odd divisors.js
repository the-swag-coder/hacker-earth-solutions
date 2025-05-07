const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(inputLines[0]);
  for (let i = 1; i <= t; i++) {
    let [nStr, mStr] = inputLines[i].split(' ');
    let n = BigInt(nStr);
    let m = BigInt(mStr);
    let s = 0n;
    while (n > 0n) {
      let term = ((n + 1n) / 2n);
      s += term * term;
      n = n / 2n;
    }
    console.log((s % m).toString());
  }
});
