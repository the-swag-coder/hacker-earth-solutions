const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let t = null;

rl.on("line", (line) => {
  inputLines.push(line.trim());
  if (t === null) {
    t = parseInt(inputLines[0]);
  } else if (inputLines.length === t + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  for (let i = 1; i <= t; i++) {
    const s = inputLines[i];
    const n = s.length;
    let ans = 0;
    for (let j = 0; j < n; j++) {
      if (vowels.has(s[j])) {
        ans += (j + 1) * (n - j);
      }
    }
    console.log(ans);
  }
});
