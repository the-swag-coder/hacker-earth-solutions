const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(inputLines[0]);
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let i = 1; i <= t; i++) {
    const s = inputLines[i].toLowerCase();
    const sSet = new Set(s);

    let isPangram = true;
    for (let char of alphabetSet) {
      if (!sSet.has(char)) {
        isPangram = false;
        break;
      }
    }

    console.log(isPangram ? "YES" : "NO");
  }
});
