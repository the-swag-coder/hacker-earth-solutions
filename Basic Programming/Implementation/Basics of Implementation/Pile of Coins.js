const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  let t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    let [p, q] = input[i].split(" ").map(Number);
    if (p % 2 === 1 && q % 2 === 1) {
      console.log("Jeel");
    } else {
      console.log("Ashish");
    }
  }
});
