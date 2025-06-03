const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => input.push(...line.trim().split(/\s+/)));

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++], 10);

  for (let test = 0; test < t; test++) {
    const n = parseInt(input[idx++], 10);
    let total = 0;

    for (let i = 0; i < n; i++) {
      const x = parseInt(input[idx++], 10);
      if (x > 0) total += x;
    }

    if (total > 0 && (total & (total - 1)) === 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
});
