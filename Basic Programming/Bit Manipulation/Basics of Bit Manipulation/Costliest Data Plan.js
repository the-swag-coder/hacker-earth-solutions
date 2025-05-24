const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    const n = parseInt(input[index++]);
    const aLine = input[index++].split(" ").map(Number);
    const a = [0, ...aLine];

    let requiredOR = 0;
    for (let i = 1; i <= n; i++) {
      requiredOR |= a[i];
    }

    const prefix = new Array(n + 2).fill(0);
    const suffix = new Array(n + 2).fill(0);

    for (let i = 1; i <= n; i++) {
      prefix[i] = prefix[i - 1] | a[i];
    }
    for (let i = n; i >= 1; i--) {
      suffix[i] = suffix[i + 1] | a[i];
    }

    let ans = 0;
    for (let i = 1; i <= n; i++) {
      if ((prefix[i - 1] | suffix[i + 1]) === requiredOR) {
        ans = Math.max(ans, a[i]);
      }
    }

    console.log(ans);
  }
});
