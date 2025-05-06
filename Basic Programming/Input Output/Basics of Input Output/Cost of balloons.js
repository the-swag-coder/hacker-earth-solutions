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
    const testCases = parseInt(lines[lineIndex++]);

    for (let tc = 0; tc < testCases; tc++) {
      // Parse p and g values
      const [p, g] = lines[lineIndex++].split(' ').map(Number);

      // Parse number of items
      const n = parseInt(lines[lineIndex++]);

      let cost = 0;
      const lower = Math.min(p, g);
      const maximum = Math.max(p, g);

      let p1Total = 0;
      let p2Total = 0;

      // Process each item
      for (let i = 0; i < n; i++) {
        const [p1, p2] = lines[lineIndex++].split(' ').map(Number);
        p1Total += p1;
        p2Total += p2;
      }

      // Calculate optimal cost
      if (p1Total >= p2Total) {
        cost += p1Total * lower;
        cost += p2Total * maximum;
      } else {
        cost += p2Total * lower;
        cost += p1Total * maximum;
      }

      console.log(cost);
    }
  });
}

solve();