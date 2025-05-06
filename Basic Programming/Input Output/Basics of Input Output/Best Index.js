const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lineCount = 0;
let n;
let arr = [];

rl.on('line', (line) => {
  if (lineCount === 0) {
    // First line contains n
    n = parseInt(line);
    lineCount++;
  } else {
    // Second line contains array elements
    arr = line.split(' ').map(Number);

    // Calculate the prefix sum array (cumulative sum)
    for (let i = 1; i < n; i++) {
      arr[i] += arr[i-1];
    }

    let max = -10000000; // Initialize with a very small value

    // For each starting position i
    for (let i = 0; i < n; i++) {
      // Calculate remaining elements to the right
      let left = n - i;
      let sum = 0;

      // Calculate k based on the triangular number formula
      // k is the number of consecutive elements starting from position i
      // that forms a triangular subsequence
      let k = Math.floor((-1 + Math.sqrt(8 * left + 1)) / 2);

      // Calculate sum of elements from index i to i+k*(k+1)/2-1
      // Using the prefix sum array for efficient calculation
      let endIndex = (k * (k + 1)) / 2 + i - 1;

      if (endIndex < n) {
        sum = arr[endIndex];

        // Subtract the prefix sum before index i
        if (i !== 0) {
          sum -= arr[i - 1];
        }

        // Update maximum sum
        if (max < sum) {
          max = sum;
        }
      }
    }

    // Print the result
    console.log(max);
    rl.close();
  }
});