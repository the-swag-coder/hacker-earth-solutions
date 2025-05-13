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
  const r = input[idx++];  // number of elements

  let mn = 100;
  let mx = 0;
  const arr = new Set();

  for (let i = 0; i < r; i++) {
    const x = input[idx++];
    arr.add(x);
    if(x < mn) {
      mn = x;
    }
    if(x > mx) {
      mx = x;
    }
  }

  if(mx - mn + 1 === arr.size)
    console.log("YES");
  else
    console.log("NO");
});
