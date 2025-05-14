const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [n, q] = input[0].split(" ").map(Number);
  const a = input[1].split(" ");
  const queries = input.slice(2).map(Number);

  const suffixDistinctCount = Array(n);
  const seen = new Set();
  const freq = new Map();

  // Traverse from end to start and record number of unique elements
  for (let i = n - 1; i >= 0; i--) {
    if (!seen.has(a[i])) {
      seen.add(a[i]);
    }
    suffixDistinctCount[i] = seen.size;
  }

  // Answer each query in O(1)
  for (let z of queries) {
    console.log(suffixDistinctCount[z - 1]);
  }
});
