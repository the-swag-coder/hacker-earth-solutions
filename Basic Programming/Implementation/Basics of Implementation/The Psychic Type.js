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
  const n = parseInt(input[0]);
  const a = input[1].split(" ").map(Number);
  let [s, e] = input[2].split(" ").map(Number);

  const visited = new Set();

  while (true) {
    const x = a[s - 1];
    if (x === e || s === e) {
      console.log("Yes");
      break;
    } else if (visited.has(s)) {
      console.log("No");
      break;
    } else {
      visited.add(s);
      s = x;
    }
  }
});
