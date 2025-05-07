const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line.trim());
});

rl.on('close', () => {
  processInput();
});

function sumOfDigits(nStr) {
  // Sum digits directly from string for better performance with large numbers
  let sum = 0;

  for (let i = 0; i < nStr.length; i++) {
    sum += parseInt(nStr[i], 10);
  }

  return BigInt(sum);
}

function processInput() {
  let T = parseInt(inputLines[0], 10);
  for (let i = 1; i <= T; i++) {
    let [nStr, kStr] = inputLines[i].split(' ');
    let n = nStr;  // Keep as string initially
    let k = parseInt(kStr, 10);

    if (k === 0) {
      console.log(n);
      continue;
    }

    // Key insight: After applying the operation a few times,
    // we'll get to small numbers that will form a cycle

    const seen = new Map();
    let position = 0;

    while (position < k) {
      // Calculate sum of digits
      const sum = sumOfDigits(n);

      // Cube the sum
      const nextN = (sum * sum * sum).toString();

      // Increment position
      position++;

      // Check if we've reached k operations
      if (position === k) {
        n = nextN;
        break;
      }

      // Check if we're going to enter a cycle
      if (seen.has(nextN)) {
        // Found a cycle
        const cycleStart = seen.get(nextN);
        const cycleLength = position - cycleStart;

        // Calculate remaining operations after considering full cycles
        const remainingOps = (k - position) % cycleLength;

        // Fast-forward through cycles
        let current = nextN;
        for (let j = 0; j < remainingOps; j++) {
          const digitSum = sumOfDigits(current);
          current = (digitSum * digitSum * digitSum).toString();
        }

        n = current;
        break;
      }

      // Record this value and continue
      seen.set(nextN, position);
      n = nextN;
    }

    console.log(n);
  }
}