const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    let n = BigInt(input[index++]);
    let arr = input[index++].split(" ").map(BigInt);

    const bits = new Array(32).fill(0n);
    let total = (n * (n - 1n)) / 2n;

    for (let x of arr) {
      for (let j = 31n; j >= 0n; j--) {
        let mask = 1n << j;
        if ((x & mask) !== 0n) {
          total -= bits[Number(j)];
          bits[Number(j)]++;
          break;
        }
      }
    }
    console.log(total.toString());
  }
});
