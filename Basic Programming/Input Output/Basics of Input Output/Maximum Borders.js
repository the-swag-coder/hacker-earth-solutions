const readline = require('readline');

function solve() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const lines = [];

  rl.on('line', (line) => {
    lines.push(line);
  });

  rl.on('close', () => {
    let lineIndex = 0;

    // Parse number of test cases
    const t = parseInt(lines[lineIndex++]);

    for (let i = 0; i < t; i++) {
      // Parse n and m for current test case
      const [n, m] = lines[lineIndex++].split(' ').map(Number);

      let maxCount = 0;

      // Process each row
      for (let j = 0; j < n; j++) {
        const row = lines[lineIndex++];

        // Count '#' characters in the current row
        let count = 0;
        for (let k = 0; k < m; k++) {
          if (row[k] === '#') {
            count++;
          }
        }

        // Update maximum count
        maxCount = Math.max(maxCount, count);
      }

      // Output result for current test case
      console.log(maxCount);
    }
  });
}

solve();