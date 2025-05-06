const readline = require('readline');

function solve() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let lines = [];
  let lineIndex = 0;

  rl.on('line', (line) => {
    lines.push(line);
  });

  rl.on('close', () => {
    // Read number of elements
    const n = parseInt(lines[lineIndex++]);

    // Read array elements
    const elements = lines[lineIndex].split(' ').map(Number);

    // Create frequency map
    const have = new Map();
    let m = 0; // Track maximum frequency

    // Count frequencies
    for (const x of elements) {
      const freq = (have.get(x) || 0) + 1;
      have.set(x, freq);
      m = Math.max(m, freq);
    }

    // Count how many elements have the maximum frequency
    let r = 0;
    for (const [key, value] of have.entries()) {
      if (value === m) {
        r++;
      }
    }

    console.log(r);
  });
}

solve();