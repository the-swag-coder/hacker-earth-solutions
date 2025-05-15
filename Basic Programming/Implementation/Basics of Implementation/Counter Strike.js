const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let lineIdx = 0;

rl.on("line", line => inputLines.push(line.trim()));
rl.on("close", () => {
  let T = parseInt(inputLines[lineIdx++]);

  while (T--) {
    const [n, m, d] = inputLines[lineIdx++].split(" ").map(Number);
    const xloc = [];
    const yloc = [];

    for (let i = 0; i < n; i++) {
      const [xL, yL] = inputLines[lineIdx++].split(" ").map(Number);
      xloc.push(xL);
      yloc.push(yL);
    }

    let cnt = 0;
    for (let j = 0; j < m; j++) {
      const [x, y] = inputLines[lineIdx++].split(" ").map(Number);
      for (let k = 0; k < n; k++) {
        const mDist = Math.abs(x - xloc[k]) + Math.abs(y - yloc[k]);
        if (mDist <= d) {
          cnt++;
          break;
        }
      }
    }

    if (cnt > m / 2) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});
