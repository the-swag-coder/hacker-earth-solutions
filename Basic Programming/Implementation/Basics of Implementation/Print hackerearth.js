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
  const size = parseInt(input[0], 10);
  const str = input[1];
  const target = "hackerearth";

  const requiredFreq = {};
  const givenFreq = {};

  // Count required frequency of each character in "hackerearth"
  for (const ch of target) {
    requiredFreq[ch] = (requiredFreq[ch] || 0) + 1;
  }

  // Count actual frequency of each character in input string
  for (const ch of str) {
    if (requiredFreq[ch]) {
      givenFreq[ch] = (givenFreq[ch] || 0) + 1;
    }
  }

  // Calculate how many times we can form "hackerearth"
  let minCount = Infinity;
  for (const ch in requiredFreq) {
    const possible = Math.floor((givenFreq[ch] || 0) / requiredFreq[ch]);
    minCount = Math.min(minCount, possible);
  }

  console.log(minCount);
});
