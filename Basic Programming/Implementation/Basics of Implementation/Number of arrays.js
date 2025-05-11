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
  let t = parseInt(input[idx++]);

  while (t-- > 0) {
    const [n, k, q] = input[idx++].split(" ").map(Number);
    const a = input[idx++].split(" ").map(Number);

    const mi = Math.min(...a);
    const mx = Math.max(...a);

    if (k === 1) {
      if (mx < q) {
        console.log(mx);
      } else {
        console.log("NO");
      }
    } else {
      if (mi < q) {
        console.log(mi);
      } else {
        console.log("NO");
      }
    }
  }
});
