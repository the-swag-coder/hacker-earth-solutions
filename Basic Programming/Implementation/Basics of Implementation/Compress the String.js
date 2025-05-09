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
  let index = 0;
  const t = parseInt(inputLines[index++]);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let test = 0; test < t; test++) {
    const n = parseInt(inputLines[index++]);
    const s = inputLines[index++];

    const ans = [];
    let c = 0;

    ans.push(s[0].toUpperCase());

    for (let i = 1; i < n; i++) {
      const ch = s[i];

      if (vowels.has(ch)) {
        if (c > 0) {
          ans.push(c.toString());
          c = 0;
        }

        if (ch !== ans[ans.length - 1]) {
          ans.push(ch);
        }
      } else {
        c++;
      }
    }

    if (c > 0) {
      ans.push(c.toString());
    }

    console.log(ans.join(''));
  }
});
