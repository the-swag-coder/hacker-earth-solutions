const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const str = line.trim();
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    ans += str.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
  }

  console.log(ans);
  rl.close();
});
