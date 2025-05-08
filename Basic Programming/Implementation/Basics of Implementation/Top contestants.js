function findK(K, Score, N) {
  // Add 0 as the first score to match the original Python behavior
  const points = [0, ...Score];

  // Map each value to its index
  const indexed = points.map((value, index) => ({ index, value }));

  // Sort by value descending
  indexed.sort((a, b) => b.value - a.value);

  // Return the top K indices
  return indexed.slice(0, K).map(item => item.index);
}

// Example usage with stdin
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
  if (inputLines.length === 2) {
    const [N, K] = inputLines[0].split(" ").map(Number);
    const Score = inputLines[1].split(" ").map(Number);
    const result = findK(K, Score, N);
    console.log(result.join(" "));
    rl.close();
  }
});
