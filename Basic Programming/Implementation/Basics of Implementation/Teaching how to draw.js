const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => inputLines.push(line.trim()));
rl.on("close", () => {
  const t = parseInt(inputLines[0]);

  function countRectangle(n) {
    let cnt = 0;
    const limit = Math.floor(Math.sqrt(n));
    for (let l = 1; l <= limit; l++) {
      let h = l;
      while (h * l <= n) {
        cnt++;
        h++;
      }
    }
    return cnt;
  }

  for (let i = 1; i <= t; i++) {
    const n = parseInt(inputLines[i]);
    console.log(countRectangle(n));
  }
});
