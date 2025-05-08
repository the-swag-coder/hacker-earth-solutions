const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const tests = parseInt(input[0]);

  for (let i = 1; i <= tests; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    if (a >= b) {
      console.log(Math.floor(a / b));
    } else {
      console.log(Math.floor(b / a));
    }
  }
});
