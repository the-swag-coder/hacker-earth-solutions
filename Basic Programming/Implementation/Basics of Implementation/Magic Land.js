const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    const [n, m] = input[idx++].split(" ").map(Number);
    const mat = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    const row = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    const col = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // Fill matrix
    for (let i = 1; i <= n; i++) {
      const values = input[idx++].split(" ").map(Number);
      for (let j = 1; j <= m; j++) {
        mat[i][j] = values[j - 1];
      }
    }

    let colMax = 0, rowMax = 0;

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        col[i][j] = 1;
        if (i > 1 && mat[i][j] === mat[i - 1][j]) {
          col[i][j] += col[i - 1][j];
        }

        row[i][j] = 1;
        if (j > 1 && mat[i][j] === mat[i][j - 1]) {
          row[i][j] += row[i][j - 1];
        }

        colMax = Math.max(colMax, col[i][j]);
        rowMax = Math.max(rowMax, row[i][j]);
      }
    }

    console.log(colMax * rowMax);
  }
});
