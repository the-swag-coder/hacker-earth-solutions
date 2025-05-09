const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mat = [];
let n = 0, m = 0;
let lineCount = 0;

rl.on("line", (line) => {
  if (lineCount === 0) {
    const [rows, cols] = line.split(" ").map(Number);
    n = rows;
    m = cols;
  } else {
    mat.push(line);
  }
  lineCount++;

  if (lineCount > n) {
    rl.close();
  }
});

rl.on("close", () => {
  function isValid(x, y) {
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 7; j++) {
        if (
          mat[i][j] === mat[i][j + 1] ||
          (i < x + 7 && mat[i][j] === mat[i + 1][j])
        ) {
          return false;
        }
      }
    }
    return true;
  }

  let count = 0;
  for (let i = 0; i + 8 <= n; i++) {
    for (let j = 0; j + 8 <= m; j++) {
      if (isValid(i, j)) {
        count++;
      }
    }
  }
  console.log(count);
});
