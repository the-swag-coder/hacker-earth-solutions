const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
  if (inputLines.length === 2) rl.close();
});

rl.on("close", () => {
  const s = inputLines[0];
  const t = inputLines[1];
  const u = s + t;

  const counter = {};
  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode(97 + i); // 'a' is ASCII 97
    counter[ch] = 0;
  }

  for (const ch of u) {
    if (ch >= 'a' && ch <= 'z') {
      counter[ch]++;
    }
  }

  let length = 0;
  let more = 0;

  for (const count of Object.values(counter)) {
    if (count % 2 === 1) {
      length += count - 1;
      more = 1;
    } else {
      length += count;
    }
  }

  length += more;
  console.log(length);
});
