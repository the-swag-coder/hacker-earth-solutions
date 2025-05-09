const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const t = parseInt(inputLines[0]);
  let index = 1;

  for (let test = 0; test < t; test++) {
    let a = inputLines[index++];
    let b = inputLines[index++];

    // Pad the shorter number with leading zeros
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');

    let error = BigInt(0);
    let multi = BigInt(10);

    for (let i = maxLen - 1; i >= 0; i--) {
      const digitA = parseInt(a[i]);
      const digitB = parseInt(b[i]);

      if (digitA + digitB >= 10) {
        error += multi;
      }
      multi *= BigInt(10);
    }

    console.log(error.toString());
  }
});
