const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
  if (inputLines.length === 3) {
    rl.close();
  }
});

rl.on("close", () => {
  const n = parseInt(inputLines[0]);
  const A = inputLines[1].split(" ").map(Number);
  const B = inputLines[2].split(" ").map(Number);

  const val = new Map();

  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];
    val.set(a, Math.max(b, val.get(a) ?? 0));
  }

  const result = A.map(a => val.get(a));
  console.log(result.join(" "));
});
