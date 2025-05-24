const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const t = parseInt(input[0]);
  let index = 1;

  for (let i = 0; i < t; i++) {
    const n = BigInt(input[index++]);

    if (n === 0n || (n & (n - 1n)) === 0n) {
      console.log("0");
    } else {
      console.log("1");
    }
  }
});
