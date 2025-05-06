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
    // Parse input
    const n = parseInt(lines[0]);
    const s = lines[1];

    // Initialize variables
    const consecutiveHouse = [];
    let temp = 0;
    const arr = new Array(n).fill('');

    // Process each character in the string
    for (let i = 0; i < n; i++) {
      if (s[i] === 'H') {
        arr[i] = 'H';
        temp += 1;

        // Check if we're at the end of the string
        if (i === n - 1) {
          consecutiveHouse.push(temp);
        }
      } else {
        arr[i] = 'B';

        // If we had consecutive houses before this
        if (temp > 0) {
          consecutiveHouse.push(temp);
          temp = 0;
        }
      }
    }

    // Check conditions and output result
    if (consecutiveHouse.length === 0 || Math.max(...consecutiveHouse) === 1) {
      console.log('YES');
      console.log(arr.join(''));
    } else {
      console.log('NO');
    }
  });
}

solve();