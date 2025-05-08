const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", line => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(inputLines[0]);
  const m = parseInt(inputLines[1]);
  const data = [];
  const flat = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    const ids = inputLines[2 + i].split(" ").map(Number);
    let found = false;
    for (const d of data) {
      if (d.length === ids.length && d.every((val, idx) => val === ids[idx])) {
        found = true;
        break;
      }
    }
    if (found) {
      count++;
    } else {
      data.push(ids);
      flat.push(...ids);
    }
  }

  const freq = {};
  for (const num of flat) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const freqValues = Object.values(freq);
  const maxC = Math.max(...freqValues);

  if (maxC > 2) {
    const minC = Math.min(...freqValues);
    count += maxC - Math.max(2, minC) + 1;
  }

  if ((count > n - 2 && count > 0) || (data.length === 1 && n > 1)) {
    count = n - 2;
  }

  console.log(count);
});
