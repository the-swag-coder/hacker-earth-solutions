const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
let lineCount = 0;

rl.on('line', (line) => {
  lines.push(line);
  lineCount++;

  if (lineCount === 2) {
    solve();
    rl.close();
  }
});

// Class that simulates an ordered set with the ability to count elements less than a value
class OrderedArray {
  constructor() {
    this.arr = [];
  }

  // Insert element while maintaining sorted order
  insert(value) {
    let left = 0;
    let right = this.arr.length - 1;

    // Find insertion point using binary search
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.arr[mid] === value) {
        return; // Value already exists (though in this problem we won't have duplicates)
      } else if (this.arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    this.arr.splice(left, 0, value);
  }

  // Count elements less than value (order_of_key in PBDS)
  orderOfKey(value) {
    let left = 0;
    let right = this.arr.length - 1;
    let pos = 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.arr[mid] < value) {
        pos = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return pos;
  }

  // Clear the array
  clear() {
    this.arr = [];
  }
}

function solve() {
  const [n, l, r] = lines[0].split(' ').map(BigInt);
  const a = lines[1].split(' ').map(BigInt);

  // Create ordered sets for odd and even numbers
  const evenSet = new OrderedArray();
  const oddSet = new OrderedArray();

  let answer = 0n;

  // First pass: count pairs with sum <= r
  for (let i = 0; i < n; i++) {
    if (a[i] % 2n === 1n) { // Odd number
      // Find how many even numbers can pair with current odd number with sum <= r
      const target = r - a[i] + 1n;
      const count = evenSet.orderOfKey(target);
      answer += BigInt(count);

      // Add to odd set
      oddSet.insert(a[i]);
    } else { // Even number
      // Find how many odd numbers can pair with current even number with sum <= r
      const target = r - a[i] + 1n;
      const count = oddSet.orderOfKey(target);
      answer += BigInt(count);

      // Add to even set
      evenSet.insert(a[i]);
    }
  }

  // Clear sets for second pass
  evenSet.clear();
  oddSet.clear();

  // Second pass: subtract pairs with sum <= (l-1)
  for (let i = 0; i < n; i++) {
    if (a[i] % 2n === 1n) { // Odd number
      // Find how many even numbers can pair with current odd number with sum <= (l-1)
      const target = l - 1n - a[i] + 1n;
      const count = evenSet.orderOfKey(target);
      answer -= BigInt(count);

      // Add to odd set
      oddSet.insert(a[i]);
    } else { // Even number
      // Find how many odd numbers can pair with current even number with sum <= (l-1)
      const target = l - 1n - a[i] + 1n;
      const count = oddSet.orderOfKey(target);
      answer -= BigInt(count);

      // Add to even set
      evenSet.insert(a[i]);
    }
  }

  console.log(answer.toString());
}