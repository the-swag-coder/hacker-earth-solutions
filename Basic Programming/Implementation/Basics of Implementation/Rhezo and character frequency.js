const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let lineCount = 0;

rl.on("line", (line) => {
  inputLines.push(line);
  lineCount++;

  if (lineCount === 3) {
    solve(inputLines);
    rl.close();
  }
});

function find(pre, x, y) {
  return x === 0 ? pre[y] : pre[y] - pre[x - 1];
}

function solve(inputs) {
  const S = inputs[0];
  const C = inputs[1];
  const P = parseInt(inputs[2]);

  // Create prefix sum array
  const pre = new Array(S.length).fill(0);
  pre[0] = S[0] === C[0] ? 1 : 0;

  for (let i = 1; i < S.length; i++) {
    pre[i] = pre[i - 1] + (S[i] === C[0] ? 1 : 0);
  }

  // Find maximum occurrences in a substring of length P
  let maxOccurrences = 0;
  for (let i = P - 1; i < S.length; i++) {
    maxOccurrences = Math.max(maxOccurrences, find(pre, i - P + 1, i));
  }

  // Find rightmost position with maximum occurrences
  let ans = -1;
  const adjustedP = P - 1;

  for (let i = adjustedP; i < S.length; i++) {
    if (find(pre, i - adjustedP, i) === maxOccurrences) {
      ans = i;
    }
  }

  console.log(ans === -1 ? -1 : ans + 1);
}