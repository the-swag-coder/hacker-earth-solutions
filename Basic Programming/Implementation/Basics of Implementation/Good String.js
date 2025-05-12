const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const n = line.trim();
  const arr = Array(26).fill(0);
  let cnt = 0;

  for (const ch of n) {
    const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    if (arr[index] === 0) {
      cnt++;
      arr[index] = 1;
    }
  }

  console.log(n.length - cnt);
  rl.close();
});
