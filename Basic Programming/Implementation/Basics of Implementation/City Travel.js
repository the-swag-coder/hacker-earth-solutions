const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// To store the input lines
let inputs = [];
let firstLineProcessed = false;
let expectedTotalLines = 0;

rl.on("line", (line) => {
  inputs.push(line);

  // Process the first line to determine how many more lines we need
  if (!firstLineProcessed) {
    const [s, x, n] = inputs[0].split(" ").map(Number);
    expectedTotalLines = n + 1; // First line + n pairs
    firstLineProcessed = true;

    // If n is 0, we don't need any more input
    if (n === 0) {
      processInputs(inputs);
      rl.close();
    }
  }

  // Check if we have received all expected inputs
  if (firstLineProcessed && inputs.length === expectedTotalLines) {
    processInputs(inputs);
    rl.close();
  }
});

function processInputs(inputs) {
  // Parse the first line
  const [s, x, n] = inputs[0].split(" ").map(Number);

  // Create an array to store the n pairs of values
  const a = [];

  // Parse the n lines containing pairs of values
  for (let i = 1; i <= n; i++) {
    const [pos, val] = inputs[i].split(" ").map(Number);
    a.push([pos, val]);
  }

  // Sort the array by the first value (position)
  a.sort((pair1, pair2) => pair1[0] - pair2[0]);

  // Initialize variables
  let score = s;
  let position = 1;
  let bonusIndex = 0;

  // Loop until score becomes non-positive
  while (score > 0) {
    if (bonusIndex < n && position === a[bonusIndex][0]) {
      score -= a[bonusIndex][1];
      bonusIndex++;
    } else {
      score -= x;
    }
    position++;
  }

  // Print the final position - 1
  console.log(position - 1);
}