const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let test = parseInt(input[0]);
  let index = 1;

  while (test--) {
    let n = parseInt(input[index++]);
    let arr = input[index++].split(' ').map(Number);

    let curXor = 0;
    let cnt = [1, 0];  // cnt[0] for even parity, cnt[1] for odd
    let ans = 0;

    for (let i = 0; i < n; i++) {
      curXor ^= arr[i];
      let parity = countSetBits(curXor) % 2;
      ans += cnt[parity ^ 1];
      cnt[parity]++;
    }

    console.log(ans);
  }
});

function countSetBits(x) {
  let count = 0;
  while (x > 0) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}
