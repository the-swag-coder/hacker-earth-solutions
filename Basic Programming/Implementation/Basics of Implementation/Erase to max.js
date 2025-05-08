const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  let T = parseInt(input[0]);
  let idx = 1;

  for (let t = 0; t < T; t++) {
    let N = parseInt(input[idx]);
    let Arr = input[idx + 1].split(" ").map(Number);
    idx += 2;

    console.log(getResult(Arr));
  }
});

function getResult(arr) {
  let counter = new Map();

  // Count frequency
  for (let num of arr) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  // Calculate key * value
  let products = [];
  for (let [key, val] of counter.entries()) {
    products.push(key * val);
  }

  // Remove the minimum product
  let minVal = Math.min(...products);
  let index = products.indexOf(minVal);
  if (index > -1) products.splice(index, 1);

  // Return the sum
  return products.reduce((acc, val) => acc + val, 0);
}
