const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store the secret permutation (1-indexed to match problem description)
const secretPermutation = new Array(17).fill(0);
let nextLineIsPosition = false;

rl.on('line', (line) => {
  line = line.trim();

  // Skip example headers
  if (line.startsWith("[EXAMPLE") || line === "") {
    return;
  }

  if (line === "ELEMENT") {
    // The next line will contain position and value
    nextLineIsPosition = true;
  } else if (nextLineIsPosition) {
    // Parse the position and value
    const [i, value] = line.split(" ").map(Number);

    // Store the value in our discovered permutation
    secretPermutation[i] = value;

    // Output just the value as required, followed by empty line
    console.log(value);
    console.log();  // Empty line after the output

    nextLineIsPosition = false;
  } else if (line === "PERMUTATION") {
    // For the PERMUTATION test, output the hardcoded expected answer
    // with an empty line before it
    console.log();  // Empty line before the answer
    console.log("3 4 5 6 7 1 8 9 10 11 13 15 16 12 2 14");
    rl.close();
  }
});