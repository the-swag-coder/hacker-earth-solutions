const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  let idx = 0;
  const t = input[idx++];
  let n = input[idx++];

  const arr = Array(101).fill(0);

  while (n--) {
    const x = input[idx++];
    let f = false;
    const val = Math.min(x, t);
    for (let i = val; i >= 1; i--) {
      if (arr[i] < x) {
        arr[i] = x;
        console.log("YES");
        f = true;
        break;
      }
    }
    if (!f) console.log("NO");
  }
});
