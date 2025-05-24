const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let tests = parseInt(input[0]);
  let index = 1;

  for (let _ = 0; _ < tests; ++_) {
    let n = parseInt(input[index++]);
    let arr = input[index++].split(' ').map(Number);

    let freq = new Map();
    let ans = 0n;

    for (let i = 0; i < n; i++) {
      let val = arr[i] ^ (i + 1);
      let count = freq.get(val) || 0n;
      ans += count;
      freq.set(val, count + 1n);
    }

    console.log(ans.toString());
  }
});
