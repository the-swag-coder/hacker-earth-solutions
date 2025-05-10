const readline = require("readline");

// Create interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

// Read all input lines
rl.on("line", (line) => {
  lines.push(line);
});

// Process input when EOF is reached
rl.on("close", () => {
  // First line is the number of test cases
  const t = parseInt(lines[0]);

  let lineIndex = 1;
  // Process each test case
  for (let i = 0; i < t; i++) {
    // Each test case spans 2 lines with 4 coordinates each
    const firstLine = lines[lineIndex++].trim().split(" ").map(Number);
    const secondLine = lines[lineIndex++].trim().split(" ").map(Number);

    const x1 = firstLine[0];
    const y1 = firstLine[1];
    const x2 = firstLine[2];
    const y2 = firstLine[3];

    const x3 = secondLine[0];
    const y3 = secondLine[1];
    const x4 = secondLine[2];
    const y4 = secondLine[3];

    if (((x1 === x2) && (y1 === y2)) || ((x3 === x4) && (y3 === y4))) {
      console.log("INVALID");
    } else if (((x2 - x1) * (x4 - x3)) === (-(y2 - y1) * (y4 - y3))) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

  process.exit(0);
});