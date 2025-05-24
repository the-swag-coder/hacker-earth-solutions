const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let T = parseInt(input[0]);
  let index = 1;

  for (let t = 0; t < T; t++) {
    let [l, r] = input[index++].split(" ").map(BigInt);
    let ans = 0n;

    while (true) {
      if (l === 1n) {
        ans += 1n;
        break;
      }

      const b = 64n - BigInt((l - 1n).toString(2).length - 1);
      let t = 1n << (BigInt((l - 1n).toString(2).length));

      if (t <= r) {
        ans += t;
        break;
      }

      t = t / 2n;
      ans += t;
      l -= t;
      r -= t;
    }

    console.log(ans.toString());
  }
});
