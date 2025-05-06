const readline = require('readline');

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array representing number of matchsticks needed for each digit (0-9)
const matchsticks = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let t = 0;        // Number of test cases
let testCaseNum = 0;  // Current test case
let inputs = [];   // Store inputs

// Read the first line for number of test cases
rl.on('line', (line) => {
  if (testCaseNum === 0) {
    t = parseInt(line);
    testCaseNum++;
  } else {
    // Read each test case input
    inputs.push(line);
    testCaseNum++;

    // Process if we've read all test cases
    if (testCaseNum > t) {
      processTestCases();
      rl.close();
    }
  }
});

function processTestCases() {
  for (let i = 0; i < t; i++) {
    const n = inputs[i];
    let sum = 0;

    // Calculate total matchsticks needed
    for (let j = 0; j < n.length; j++) {
      const digit = parseInt(n[j]);
      sum += matchsticks[digit];
    }

    let result = '';

    // If sum is odd, start with 7 (uses 3 matchsticks)
    if (sum % 2 === 1) {
      result += '7';
      sum -= 3;
    } else {
      // If sum is even, start with 1 (uses 2 matchsticks)
      result += '1';
      sum -= 2;
    }

    // Fill the rest with 1's (each uses 2 matchsticks)
    const onesCount = sum / 2;
    for (let j = 0; j < onesCount; j++) {
      result += '1';
    }

    console.log(result);
  }
}