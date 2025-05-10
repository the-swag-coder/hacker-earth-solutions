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
  const t = parseInt(input[0]);

  for (let i = 1; i <= t; i++) {
    const s = input[i];
    const a = new Array(10).fill(0);

    // Count the frequency of each digit
    for (const ch of s) {
      a[parseInt(ch)]++;
    }

    // Find the digit with the highest frequency
    let mx = 0;
    for (let i = 1; i < 10; i++) {
      if (a[i] > a[mx]) {
        mx = i;
      }
    }

    console.log(mx);
  }
});
