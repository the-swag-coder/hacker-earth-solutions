const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(inputLines[idx++]);

  for (let _ = 0; _ < t; _++) {
    const [n, m] = inputLines[idx++].split(" ").map(Number);
    const passengers = [];

    for (let i = 0; i < n; i++) {
      const [s, e] = inputLines[idx++].split(" ").map(Number);
      passengers.push([s, e]);
    }

    // Sort by starting time
    passengers.sort((a, b) => a[0] - b[0]);

    const counter = new Array(101).fill(0);

    for (let i = 0; i < n; i++) {
      let [s, e] = passengers[i].map(x => x + 1);  // +1 like in Python

      if (counter[s] >= m) continue;

      for (let j = s; j < e; j++) {
        counter[j]++;
      }
    }

    let isFull = (m === 0);
    let revenue = 0;

    for (let i = 1; i <= 100; i++) {
      if (counter[i]) {
        if (counter[i] === 2) {
          revenue += 10 * counter[i] * 0.95;
        } else if (counter[i] >= 3) {
          revenue += 10 * counter[i] * 0.93;
        } else {
          revenue += 10 * counter[i];
        }
      }
      if (counter[i] === m) isFull = true;
    }

    const roundedRevenue = Math.round(revenue);
    if (isFull) {
      console.log(`${roundedRevenue} Cab was full`);
    } else {
      console.log(roundedRevenue);
    }
  }
});
