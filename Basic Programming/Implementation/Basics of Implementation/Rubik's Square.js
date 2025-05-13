const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const [n, r, c] = input[idx++].split(" ").map(Number);

  // Read matrix
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(input[idx++].split(" ").map(Number));
  }

  // Read row operations
  const row = Array(n).fill(0);
  const rowOps = input[idx++].split(" ").map(x => parseInt(x) - 1);
  for (let x of rowOps) row[x]++;

  // Read column operations
  const col = Array(n).fill(0);
  const colOps = input[idx++].split(" ").map(x => parseInt(x) - 1);
  for (let x of colOps) col[x]++;

  // Apply row rotations
  for (let i = 0; i < n; i++) {
    const temp = Array(n);
    for (let j = 0; j < n; j++) {
      temp[(j + row[i]) % n] = a[i][j];
    }
    a[i] = temp;
  }

  // Apply column rotations
  for (let j = 0; j < n; j++) {
    const temp = Array(n);
    for (let i = 0; i < n; i++) {
      temp[(i + col[j]) % n] = a[i][j];
    }
    for (let i = 0; i < n; i++) {
      a[i][j] = temp[i];
    }
  }

  // Output result
  for (let i = 0; i < n; i++) {
    console.log(a[i].join(" "));
  }
});
