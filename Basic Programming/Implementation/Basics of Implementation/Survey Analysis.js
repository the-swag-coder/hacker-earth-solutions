const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const days = Array(7).fill(0);
let lineCount = 0;

rl.on("line", (line) => {
  if (lineCount < 7) {
    const s = line.trim();
    let count = 0;
    for (const ch of s) {
      if (ch === '1') count++;
    }
    days[lineCount] = count;
    lineCount++;
    if (lineCount === 7) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  const sum = days.reduce((acc, val) => acc + val, 0);
  const average = sum / 7;

  let varianceSum = 0;
  for (let i = 0; i < 7; i++) {
    varianceSum += (average - days[i]) ** 2;
  }

  const standardDeviation = Math.sqrt(varianceSum / 7);
  console.log(standardDeviation.toFixed(4));
});
