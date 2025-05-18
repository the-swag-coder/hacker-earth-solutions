const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", line => inputLines.push(line.trim()));
rl.on("close", () => {
  const t = parseInt(inputLines[0]);
  let idx = 1;

  for (let _ = 0; _ < t; _++) {
    const n = parseInt(inputLines[idx++]);
    const a = inputLines[idx++].split(' ').map(Number);

    const invList = [];
    for (let i = 1; i <= n; i++) {
      invList.push(a.indexOf(i) + 1);
    }

    let isInverse = true;
    for (let i = 0; i < n; i++) {
      if (a[i] !== invList[i]) {
        isInverse = false;
        break;
      }
    }

    console.log(isInverse ? "inverse" : "not inverse");
  }
});
