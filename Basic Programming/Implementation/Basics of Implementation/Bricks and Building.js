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
  const n = parseInt(input[idx++]);

  // Read n lines of numbers
  const aList = [];
  for (let i = 0; i < n; i++) {
    aList.push(parseInt(input[idx++]));
  }

  const c = new Array(100100).fill(0);
  const d = new Array(100100).fill(0);
  let max_a = 0;

  for (let a of aList) {
    c[a]++;
    max_a = Math.max(max_a, a);
  }

  // Precompute number of multiples
  for (let x = 1; x <= max_a; x++) {
    for (let y = x; y <= max_a; y += x) {
      d[x] += c[y];
    }
  }

  const q = parseInt(input[idx++]);
  const queries = [];

  // Remaining q lines are the queries
  for (let i = 0; i < q; i++) {
    queries.push(parseInt(input[idx++]));
  }

  for (let x of queries) {
    console.log(d[x]);
  }
});
