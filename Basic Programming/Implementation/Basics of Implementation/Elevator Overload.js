const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputLines = [];
let currentLine = 0;

// Read all input lines
rl.on('line', (line) => {
  inputLines.push(line.trim());
});

// Process input after all lines are read
rl.on('close', () => {
  solve();
});

function solve() {
  const t = parseInt(inputLines[currentLine++]);

  for (let testCase = 0; testCase < t; testCase++) {
    // Parse number of floors
    const n = parseInt(inputLines[currentLine++]);

    // Parse max people capacity and max weight capacity
    const [max_p, max_w] = inputLines[currentLine++].split(' ').map(Number);

    // Parse number of people entering at each floor
    const arrValues = inputLines[currentLine++].split(' ').map(Number);
    const arr = new Array(n+1).fill(0);
    for (let i = 1; i < n; i++) {
      arr[i] = arrValues[i-1];
    }

    // Arrays to track people and weight per destination floor
    const weight = new Array(n+1).fill(0);
    const people = new Array(n+1).fill(0);

    let totalWeight = 0;
    let totalPeople = 0;
    let result = n;  // Default result if no capacity is exceeded
    let flag = false; // Flag to mark if capacity has been exceeded

    // Process each floor
    for (let i = 1; i < n; i++) {
      // Remove people getting off at this floor
      totalWeight -= weight[i];
      totalPeople -= people[i];

      // Process people entering at this floor
      if (arr[i] > 0) {
        // Read destination floors
        const destinations = inputLines[currentLine++].split(' ').map(Number);

        // Read weights
        const weights = inputLines[currentLine++].split(' ').map(Number);

        // Process each person
        for (let j = 0; j < arr[i]; j++) {
          const destFloor = destinations[j];
          const personWeight = weights[j];

          // Add this person's data
          people[destFloor]++;
          weight[destFloor] += personWeight;

          // Update totals in elevator
          totalPeople++;
          totalWeight += personWeight;
        }
      }

      // Check if capacity is exceeded
      if (!flag && (totalPeople > max_p || totalWeight > max_w)) {
        result = i;
        flag = true;
      }
    }

    console.log(result);
  }
}