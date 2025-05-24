const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [L, R] = input[0].split(" ").map(BigInt);

  let odd = (R - L + 1n) / 2n;

  if (L % 2n === 1n && R % 2n === 1n) {
    odd += 1n;
  }

  if (odd % 2n === 1n) {
    console.log("odd");
  } else {
    console.log("even");
  }
});
