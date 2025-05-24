const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    let n = parseInt(input[index++]);
    let arr = input[index++].split(" ").map(Number);

    let cntZeros = arr.filter(x => x === 0).length;
    let cnt = 0;

    if (cntZeros === 0 || cntZeros === n) {
      console.log(0);
      continue;
    }

    if (cntZeros < Math.floor(n / 2)) {
      console.log(-1);
      continue;
    }

    for (let i = 0; i + 1 < n; i++) {
      if (arr[i] === 0) continue;

      if (arr[i] === arr[i + 1] && arr[i] !== 0) {
        i++;
        cnt++;
      }
    }

    console.log(cnt);
  }
});
