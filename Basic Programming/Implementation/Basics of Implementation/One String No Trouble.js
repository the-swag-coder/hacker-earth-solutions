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
  // Get the input string
  const str = lines[0];

  // Initialize variables
  let count = 0;
  let res = 0;

  // Process the string character by character
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      // If current character is different from next character
      count++;
    } else {
      // If current character is same as next character
      count = 0;
    }

    // Update the result if current count is greater
    if (res < count) {
      res = count;
    }
  }

  // The final result is count + 1 (as per the original code)
  console.log(res + 1);
});