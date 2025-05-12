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
  let idx = 1;

  for (let tc = 0; tc < t; tc++) {
    let [a, n] = input[idx++].split(" ").map(Number);
    let arr = input[idx++].split(" ").map(Number);

    let pos = -1;

    for (let j = 0; j < n; j++) {
      if (a > 0) {
        a = a + 3 * arr[j] - 1;
        if (a === 0 && j !== n - 1) {
          pos = j + 1;
        }
      }
    }

    if (pos === -1) {
      console.log(`Yes ${a}`);
    } else {
      console.log(`No ${pos}`);
    }
  }
});
