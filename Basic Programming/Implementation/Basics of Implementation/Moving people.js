const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let idx = 0;

  const [n, m, k] = input[idx++].split(" ").map(Number);

  const str = [""];
  for (let i = 0; i < n; i++) {
    str.push(input[idx++]);
  }

  const csum = Array.from({ length: n + 2 }, () => Array(m + 2).fill(0));

  // Building 2D prefix sum
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      csum[i][j] =
        csum[i - 1][j] +
        csum[i][j - 1] -
        csum[i - 1][j - 1] +
        (str[i][j - 1] === '1' ? 1 : 0);
    }
  }

  let lft = 1, rgh = m, up = 1, dwn = n;
  let mxlft = 1, mnrgh = m, mxup = 1, mndwn = n;

  for (let q = 0; q < k; q++) {
    const parts = input[idx++].split(" ").map(Number);
    const tp = parts[0];

    if (tp === 1) {
      const x = parts[1];
      const y = parts[2];

      lft += x;
      rgh += x;
      up += y;
      dwn += y;

      mxlft = Math.max(mxlft, lft);
      mnrgh = Math.min(mnrgh, rgh);
      mxup = Math.max(mxup, up);
      mndwn = Math.min(mndwn, dwn);
    } else {
      if (mxlft > mnrgh || mxup > mndwn) {
        console.log("0");
      } else {
        const ans =
          csum[mndwn][mnrgh] -
          csum[mndwn][mxlft - 1] -
          csum[mxup - 1][mnrgh] +
          csum[mxup - 1][mxlft - 1];
        console.log(ans);
      }
    }
  }
});
