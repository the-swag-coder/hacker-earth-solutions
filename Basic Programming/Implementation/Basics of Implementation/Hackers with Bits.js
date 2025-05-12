const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());
  if (lines.length === 2) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = parseInt(lines[0]);
  const l = lines[1];

  const s1 = [...l].filter(c => c === '1').length;
  const s2 = [...l].filter(c => c === '0').length;
  const s = l.split('0');

  let m = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const z = [...s[i]].filter(c => c === '1').length + [...s[i + 1]].filter(c => c === '1').length;
    if (z > m) m = z;
  }

  if (s2 === 0) {
    console.log(s1);
  } else if (s1 === 0) {
    console.log(0);
  } else if (s1 > m) {
    console.log(m + 1);
  } else {
    console.log(m);
  }
});
