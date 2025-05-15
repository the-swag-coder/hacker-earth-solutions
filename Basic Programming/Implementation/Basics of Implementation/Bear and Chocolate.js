const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++]);
    const grid = [];
    for (let i = 0; i < n; i++) {
      grid.push(input[idx++].split(""));
    }

    // Build prefix sum arrays
    let total = 0;
    let rowSum = new Array(n).fill(0);
    let colSum = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '#') {
          rowSum[i]++;
          colSum[j]++;
          total++;
        }
      }
    }

    // Compute prefix sums
    let rowPrefix = [0], colPrefix = [0];
    for (let i = 0; i < n; i++) {
      rowPrefix.push(rowPrefix[i] + rowSum[i]);
      colPrefix.push(colPrefix[i] + colSum[i]);
    }

    let found = false;

    // Try horizontal cut (between rows)
    for (let i = 1; i < n; i++) {
      if (2 * rowPrefix[i] === total) {
        found = true;
        break;
      }
    }

    // Try vertical cut (between columns)
    if (!found) {
      for (let i = 1; i < n; i++) {
        if (2 * colPrefix[i] === total) {
          found = true;
          break;
        }
      }
    }

    console.log(found ? "YES" : "NO");
  }
});
