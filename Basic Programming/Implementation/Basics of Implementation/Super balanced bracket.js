const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", function (line) {
  inputLines.push(line.trim());
});

rl.on("close", function () {
  const t = parseInt(inputLines[0], 10);
  let idx = 1;

  for (let i = 0; i < t; i++) {
    const s = inputLines[idx++];
    let count = 0;
    for (let j = 0; j < Math.floor(s.length / 2); j++) {
      if (s[j] === '(') {
        count++;
      }
    }
    console.log(count * 2);
  }
});
