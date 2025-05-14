const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const n = parseInt(input[idx++]);

  for (let t = 0; t < n; t++) {
    const w = input[idx++];
    let cp = "";

    for (let i = 0; i < w.length; i++) {
      const leftChar = w.charCodeAt(i) - 97;
      const rightChar = w.charCodeAt(w.length - 1 - i) - 96;
      const newCharCode = ((leftChar + rightChar) % 26) + 97;
      cp += String.fromCharCode(newCharCode);
    }

    console.log(cp);
  }
});
