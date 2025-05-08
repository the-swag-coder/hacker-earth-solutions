const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  // Parse input
  const [n, k] = lines[0].split(" ").map(Number);
  const arr = lines[1].split(" ").map(Number);

  // Calculate start and end indices for the subarray
  const startIndex = Math.floor((n - k - 1) / 2);
  const endIndex = n - Math.floor((n - k) / 2);

  // Extract the subarray
  const subArray = arr.slice(startIndex, endIndex);

  // Find and print the maximum element
  const maxElement = Math.max(...subArray);
  console.log(maxElement);
});