const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => inputLines.push(line.trim()));
rl.on("close", () => {
  let t = parseInt(inputLines[0]);
  let lineIndex = 1;

  while (t--) {
    const s = inputLines[lineIndex++];
    const n = s.length;
    const A = new Array(n);
    let index = n;

    for (let i = n - 1; i >= 0; i--) {
      if (s[i] === 'a' || s[i] === 'z') {
        index = i;
      }
      A[i] = index;
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
      ans += n - A[i];
    }

    console.log(ans);
  }
});
