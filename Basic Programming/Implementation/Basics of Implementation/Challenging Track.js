const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let testCases = 0;

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  testCases = parseInt(inputLines[0]);
  let index = 1; // Start reading after the number of test cases

  for (let t = 0; t < testCases; t++) {
    // Read n and p
    let [n, p] = inputLines[index++].split(" ").map(Number);
    // Read the h array
    const h = inputLines[index++].split(" ").map(Number);

    p -= Math.max(0, h[0]);
    if (p < 0) {
      console.log('No');
      continue;
    }

    let isPossible = true;
    for (let i = 1; i < n; i++) {
      p -= Math.max(0, h[i] - i + (h[i] % 2));
      if (p < 0) {
        console.log('No');
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      console.log('Yes', p);
    }
  }
});
