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

  for (let test = 0; test < t; test++) {
    const [n, m] = input[idx++].split(" ").map(Number);
    const arr = input[idx++].split(" ").map(Number);

    const q = [];

    for (let i = 0; i < n; i++) {
      q.push([i, arr[i]]);
    }

    let last = -1;

    while (q.length > 0) {
      const [i, val] = q.shift();
      last = i;
      if (val - m > 0) {
        q.push([i, val - m]);
      }
    }

    console.log(last + 1);
  }
});
