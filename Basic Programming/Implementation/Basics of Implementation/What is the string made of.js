const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const s = line.trim();
  const a = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    sum += a[parseInt(s[i])];
  }

  console.log(sum);
  rl.close();
});
