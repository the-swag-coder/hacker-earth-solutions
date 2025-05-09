const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(inputLines[0]);
  const contestants = new Map();

  for (let i = 1; i <= n; i++) {
    const [c, tStr] = inputLines[i].split(" ");
    const t = parseInt(tStr);

    if (contestants.has(c)) {
      let [score, time] = contestants.get(c);
      score -= 100;
      time += t;
      contestants.set(c, [score, time]);
    } else {
      contestants.set(c, [-100, t]);
    }
  }

  const heap = [];

  for (const [name, [score, time]] of contestants.entries()) {
    heap.push([score, time, name]);
  }

  // Sort to simulate min-heap (by score, then time, then name if needed)
  heap.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2].localeCompare(b[2]);
  });

  heap.forEach((contestant, index) => {
    console.log(index + 1, contestant[2]);
  });
});
