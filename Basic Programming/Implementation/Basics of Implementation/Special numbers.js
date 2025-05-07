const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate GCD using Euclidean algorithm
function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Recursive function to generate special numbers (containing only 4 and 7)
function defineSpecialNumbers(mx, vals, x = 0) {
  if (x > mx) {
    return;
  }
  if (x > 0) {
    vals.push(x);
  }
  defineSpecialNumbers(mx, vals, 10 * x + 4);
  defineSpecialNumbers(mx, vals, 10 * x + 7);
}

rl.on('line', (line) => {
  const n = parseInt(line);
  const specialNumbers = [];
  defineSpecialNumbers(n, specialNumbers);

  let count = 0;
  let k = 0;

  for (let i of specialNumbers) {
    k++;
    for (let j of specialNumbers.slice(k)) {
      if (gcd(i, j) === 1) {
        count++;
      }
    }
  }

  console.log(count);
  rl.close();
});