const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const n = parseInt(input[0]);
  const p = input[1].split(" ").map(Number);
  const a = input[2].split(" ").map(Number);

  const countOnes = p.filter(x => x === 1).length;
  const result = (countOnes === 1) ? 0 : a.reduce((acc, val) => acc + val, 0);

  console.log(result);
});
