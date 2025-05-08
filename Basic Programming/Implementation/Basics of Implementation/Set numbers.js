const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  const t = parseInt(input[0]);

  for (let i = 1; i <= t; i++) {
    const n = parseInt(input[i]);
    const binary = n.toString(2);

    if (!binary.includes('0')) {
      console.log(n);
    } else {
      const k = binary.length;
      console.log(Math.pow(2, k - 1) - 1);
    }
  }
});
