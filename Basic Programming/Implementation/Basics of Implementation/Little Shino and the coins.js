const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  const k = parseInt(input[0]);
  const s = input[1];
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = new Set();
    for (let j = i; j < s.length; j++) {
      ch.add(s[j]);
      if (ch.size === k) {
        ans++;
      }
    }
  }

  console.log(ans);
});
