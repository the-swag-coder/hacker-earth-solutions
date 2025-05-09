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
  const mapper = { a: 'b', e: 'f', i: 'j', o: 'p', u: 'v' };
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  for (let _ = 0; _ < t; _++) {
    let s = inputLines[idx++];
    let q = parseInt(inputLines[idx++]);

    if (s.length === 1 || q === 0) {
      console.log(s);
      continue;
    }

    let chars = s.split('');
    for (let i = 0; i < chars.length && q > 0; i++) {
      if (mapper.hasOwnProperty(chars[i])) {
        chars[i] = mapper[chars[i]];
        q--;
      }
    }

    console.log(chars.join(''));
  }
});
