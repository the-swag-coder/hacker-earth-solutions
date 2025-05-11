const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let i = 0; i < t; i++) {
    const s = input[idx++];
    const chr = Array(26).fill(false);
    let count = 0;

    for (const ch of s) {
      const code = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!chr[code]) {
        count++;
        chr[code] = true;
      }
    }

    console.log(count % 2 === 1 ? "Player1" : "Player2");
  }
});
