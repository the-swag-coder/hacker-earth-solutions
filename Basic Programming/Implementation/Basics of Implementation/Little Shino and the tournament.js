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
  const [n, q] = input[0].split(" ").map(Number);
  const strengths = input[1].split(" ").map(Number);
  const queries = input.slice(2, 2 + q).map(x => parseInt(x, 10));

  // Initialize fighters with strength and original index
  let fighters = strengths.map((strength, index) => ({ strength, index }));
  const fightCounts = new Array(n).fill(0);

  // Simulate the tournament
  let currentRound = [...fighters];
  while (currentRound.length > 1) {
    const nextRound = [];

    for (let i = 0; i < currentRound.length; i += 2) {
      if (i + 1 >= currentRound.length) {
        // Odd fighter goes to next round without fighting
        nextRound.push(currentRound[i]);
        continue;
      }

      const fighter1 = currentRound[i];
      const fighter2 = currentRound[i + 1];

      // Both fight, increment counts
      fightCounts[fighter1.index]++;
      fightCounts[fighter2.index]++;

      // Winner goes to next round
      if (fighter1.strength > fighter2.strength) {
        nextRound.push(fighter1);
      } else {
        nextRound.push(fighter2);
      }
    }

    currentRound = nextRound;
  }

  // Answer queries
  const output = queries.map(index => fightCounts[index - 1]).join("\n");
  console.log(output);
});
