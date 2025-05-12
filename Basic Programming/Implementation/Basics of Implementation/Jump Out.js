const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
  if (inputLines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = parseInt(inputLines[0]);
  let al = n;
  const a = inputLines[1].split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    if (a[i] >= al) {
      console.log(i + 1);
      break;
    } else {
      al -= 1;
    }
  }
});
