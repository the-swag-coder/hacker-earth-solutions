const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let t = parseInt(input[0]);
  for (let k = 1; k <= t; k++) {
    let [l, r, s] = input[k].split(' ').map(Number);
    let left = Math.floor((l - 1) / s) + 1;
    let right = Math.floor(r / s);
    if (left > right) {
      console.log("-1 -1");
    } else {
      console.log(`${left} ${right}`);
    }
  }
});
