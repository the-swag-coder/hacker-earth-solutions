const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(input[0]);
  for (let i = 1; i <= t; i++) {
    let a = parseInt(input[i]);
    if (a < 3) {
      console.log("-1");
    } else {
      let k = Math.floor(a / 3);
      console.log(`${k} ${2 * k} ${3 * k}`);
    }
  }
});
