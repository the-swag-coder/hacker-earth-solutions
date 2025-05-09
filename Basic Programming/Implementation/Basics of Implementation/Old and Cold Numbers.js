const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  const isOld = (x) => {
    x = parseInt(x);
    const half = Math.floor(x / 2);
    return x % (half + x % 2) === 0 ? 1 : 0;
  };

  for (let _ = 0; _ < t; _++) {
    const n = parseInt(inputLines[idx++]);
    const nums = inputLines[idx++].split(" ").map(isOld);

    // Build prefix sum
    const a = [0];
    for (let i = 0; i < n; i++) {
      a.push(a[a.length - 1] + nums[i]);
    }

    const q = parseInt(inputLines[idx++]);
    for (let i = 0; i < q; i++) {
      const [l, r] = inputLines[idx++].split(" ").map(Number);
      const o = a[r] - a[l - 1];        // number of "old" numbers in range
      const c = r - l + 1 - o;          // number of "not old" numbers
      if (c > o) {
        console.log(Math.floor((c - o + 1) / 2));
      } else {
        console.log(0);
      }
    }
  }
});
