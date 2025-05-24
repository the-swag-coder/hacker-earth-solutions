const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let T = parseInt(input[0]);
  let index = 1;

  for (let tc = 0; tc < T; tc++) {
    let n = parseInt(input[index++]);
    let a = input[index++].split(" ").map(Number);
    let b = input[index++].split(" ").map(Number);

    let ans = 0xFFFFFFFF;

    for (let i = 0; i < n; i++) {
      ans = ans & a[i];
      ans = ans & b[i];
    }

    console.log(ans >>> 0);
  }
});
