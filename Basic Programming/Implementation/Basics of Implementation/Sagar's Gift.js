const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++]);
    const numbers = input[idx++].split(" ").map(Number);

    let digits = [];
    for (let num of numbers) {
      digits.push(...num.toString().split('').map(Number));
    }

    digits.sort((a, b) => b - a);
    console.log(digits.join(''));
  }
});
