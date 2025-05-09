const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  for (let _ = 0; _ < t; _++) {
    const [n, m] = inputLines[idx++].split(" ").map(Number);
    let count = Array(26).fill(0);
    let single = 0;
    let pairs = 0;

    for (let i = 0; i < n; i++) {
      const ent = inputLines[idx++];
      for (let j = 0; j < m; j++) {
        count[ent[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
    }

    for (let i = 0; i < 26; i++) {
      if (count[i] % 2) {
        single++;
      }
      count[i] = Math.floor(count[i] / 2);
      if (count[i] % 2) {
        pairs++;
      }
    }

    let flag = false;

    if (m % 2) {
      if (n % 2) {
        if (single === 1 && pairs <= Math.floor(m / 2) + Math.floor(n / 2)) {
          flag = true;
        }
      } else {
        if (single === 0 && pairs <= Math.floor(n / 2)) {
          flag = true;
        }
      }
    } else {
      if (n % 2) {
        if (single === 0 && pairs <= Math.floor(m / 2)) {
          flag = true;
        }
      } else {
        if (single === 0 && pairs === 0) {
          flag = true;
        }
      }
    }

    if (flag) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});
