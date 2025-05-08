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
  const n = parseInt(inputLines[0], 10);
  const coins = [];
  const notes = [];

  for (let i = 1; i <= n; i++) {
    const [s, valStr] = inputLines[i].split(" ");
    const val = parseInt(valStr, 10);
    if (s === "Coin") {
      coins.push(val);
    } else if (s === "Note") {
      notes.push(val);
    }
  }

  console.log("Coins :");
  coins.forEach(c => console.log(c));
  console.log("Notes :");
  notes.forEach(n => console.log(n));
});
