const readline = require("readline");

function findMinMaxWordLength(s) {
  // To find the minimum length of the word that can be represented:
  // 1. First, expand all 'w' to 'vv'
  // 2. Then, replace all non-overlapping 'vv' patterns with 'w'

  // Step 1: Expand all 'w' to 'vv'
  let expandedString = s.replace(/w/g, 'vv');

  // Step 2: Count how many non-overlapping 'vv' patterns we have
  let vvCount = 0;
  for (let i = 0; i < expandedString.length - 1; i++) {
    if (expandedString[i] === 'v' && expandedString[i+1] === 'v') {
      vvCount++;
      i++; // Skip the next 'v' since we've counted this pair
    }
  }

  // Calculate minimum length by replacing all 'vv' with 'w'
  const minLength = expandedString.length - vvCount;

  // For maximum length:
  // Replace all 'w' with 'vv' (each 'w' becomes two characters)
  const wCount = (s.match(/w/g) || []).length;
  const maxLength = s.length + wCount;

  return `${minLength} ${maxLength}`;
}

// Process stdin using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineCount = 0;
let inputString = "";

rl.on("line", (line) => {
  lineCount++;
  if (lineCount === 1) {
    // First line contains the length of the string
  } else if (lineCount === 2) {
    inputString = line;
    console.log(findMinMaxWordLength(inputString));
    rl.close();
  }
});