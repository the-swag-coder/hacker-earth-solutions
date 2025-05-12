const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" "));
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 0; test < t; test++) {
    let flag = false;
    const n = parseInt(input[idx++]);

    for (let i = 0; i < n; i++) {
      let x = BigInt(input[idx++]);

      while ((x & 1n) === 0n) {
        x /= 2n;
        flag = !flag;
      }
    }

    console.log(flag ? "Charlie" : "Alan");
  }
});
