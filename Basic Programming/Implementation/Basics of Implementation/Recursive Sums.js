const readline = require('readline');

function processTestCase(inputLines, startIndex) {
  const n = parseInt(inputLines[startIndex], 10);
  let ans = 0n;
  let g0 = false;
  for (let i = 0; i < n; i++) {
    const [lenStr, dStr] = inputLines[startIndex + 1 + i].split(' ');
    const len = BigInt(lenStr);
    const d = BigInt(dStr);
    if (d > 0n) g0 = true;
    ans += (len * d) % 9n;
    if (ans >= 9n) ans -= 9n;
  }
  if (ans === 0n && g0) ans = 9n;
  console.log(ans.toString());
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let t = null;
let lineCount = 0;

rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (t === null && inputLines.length > 0) {
    t = parseInt(inputLines[0], 10);
  }
  if (t !== null && inputLines.length === lineCount) {
    rl.close();
  }
});

rl.on('close', () => {
  let lineIndex = 1;
  for (let testNo = 0; testNo < t; testNo++) {
    const n = parseInt(inputLines[lineIndex], 10);
    processTestCase(inputLines, lineIndex);
    lineIndex += n + 1;
  }
  process.exit(0);
});
