const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", function (line) {
  inputLines.push(line.trim());
});

rl.on("close", function () {
  let t = parseInt(inputLines[0]);
  for (let i = 1; i <= t; i++) {
    let [n, k] = inputLines[i].split(" ").map(Number);
    if (k % 2 !== 0 || k > (n * n) / 2) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
});
