const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(inputLines[0]);
  let idx = 1;

  while (t--) {
    const count = new Array(100001).fill(0);
    let total = 0;

    const n = parseInt(inputLines[idx++]);
    const nums = inputLines[idx++].split(" ").map(Number);

    for (let i = 0; i < n; i++) {
      count[nums[i]]++;
    }

    const k = parseInt(inputLines[idx++]);

    for (let i = 1; i <= Math.floor(k / 2); i++) {
      let temp = 0;
      if (i === k - i) {
        temp = (count[i] * (count[i] - 1)) / 2;
      } else {
        temp = count[i] * count[k - i];
      }
      total += temp;
    }

    console.log(total);
  }
});
