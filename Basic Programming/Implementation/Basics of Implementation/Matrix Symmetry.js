const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    const n = parseInt(input[idx++]);
    const matrix = [];

    for (let i = 0; i < n; i++) {
      matrix.push(input[idx++]);
    }

    let m = Math.floor(n / 2);
    let h = true, v = true;

    // Check horizontal symmetry
    for (let i = 0; i < m; i++) {
      if (matrix[i] !== matrix[n - 1 - i]) {
        h = false;
        break;
      }
    }

    // Check vertical symmetry
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] !== matrix[i][n - 1 - j]) {
          v = false;
          break;
        }
      }
      if (!v) break;
    }

    if (v && h) {
      console.log("BOTH");
    } else if (h) {
      console.log("HORIZONTAL");
    } else if (v) {
      console.log("VERTICAL");
    } else {
      console.log("NO");
    }
  }
});
