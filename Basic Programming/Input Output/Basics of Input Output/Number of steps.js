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

    // Parse arrays a and b
    const a = lines[lineIndex++].split(' ').map(Number);
    const b = lines[lineIndex++].split(' ').map(Number);

    let steps = 0;

    // First swap operation (similar to bubble sort step)
    for (let i = 0; i < n - 1; i++) {
      if (a[i] < a[i + 1]) {
        // Swap elements in array a
        let k = a[i];
        a[i] = a[i + 1];
        a[i + 1] = k;

        // Swap corresponding elements in array b
        k = b[i];
        b[i] = b[i + 1];
        b[i + 1] = k;
      }
    }

    // Main algorithm
    for (let i = 0; i < n - 1; i++) {
      while (a[n - 1] !== a[i]) {
        if (a[i] <= 0) {
          console.log("-1");
          process.exit(0);
        }

        if (a[n - 1] < a[i]) {
          a[i] = a[i] - b[i];
          steps++;
        }

        if (a[n - 1] > a[i]) {
          a[n - 1] = a[n - 1] - b[n - 1];
          steps++;
        }
      }
    }

    console.log(steps);
  });
}

solve();