const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let T = parseInt(inputLines[0]);
  let currentLine = 1;

  for (let t = 0; t < T; t++) {
    const table = inputLines[currentLine++].split(' ').map(Number);

    function func(a, b) {
      if (a === 0 && b === 0) return table[0];
      if (a === 0 && b === 1) return table[1];
      if (b === 0) return table[2];
      return table[3];
    }

    function bin_op() {
      for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= 1; j++) {
          for (let k = 0; k <= 1; k++) {
            if (func(func(i, j), k) !== func(i, func(j, k))) {
              return "No";
            }
          }
        }
      }
      return "Yes";
    }

    console.log(bin_op());
  }
});
