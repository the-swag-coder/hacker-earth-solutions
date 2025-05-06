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

    // Parse n
    const n = parseInt(lines[lineIndex++]);

    // Parse array a
    const a = lines[lineIndex++].split(' ').map(Number);

    // Calculate array b (last digits)
    const b = [];
    for (let i = 0; i < n; i++) {
      b[i] = a[i] % 10;
    }

    // Check if the last element's last digit is 0
    if (b[n - 1] === 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });
}

solve();