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
  let lineIndex = 1;

  for (let _ = 0; _ < t; _++) {
    let n = parseInt(input[lineIndex++]);
    let a = input[lineIndex++].split(" ").map(Number);
    let q = [];
    let turn = 0;
    let mx = 0;

    for (let i = 0; i < n; i++) {
      mx = Math.max(mx, a[i]);
      q.push(mx);
    }

    let mn = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      if (a[i] < mn) {
        if (q[i] < mn) {
          turn++;
        }
        mn = a[i];
      }
    }

    console.log(turn % 2 ? "Jeel" : "Ashish");
  }
});
