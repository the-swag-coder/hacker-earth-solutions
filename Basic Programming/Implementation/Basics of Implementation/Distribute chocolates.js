const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const t = parseInt(input[0]);

  for (let k = 1; k <= t; k++) {
    let [c, n] = input[k].split(' ').map(BigInt);
    let sum = (n * (n + BigInt(1n))) / BigInt(2n);

    if (c < sum) {
      console.log(c.toString());
    } else {
      console.log((c - sum) % n + "");
    }
  }
});
