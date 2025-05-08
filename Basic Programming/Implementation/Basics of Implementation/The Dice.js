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
  const s = lines[0];

  // Check if the last character is '6'
  if (s[s.length - 1] === '6') {
    console.log("-1");
  } else {
    // Count characters that are not '6'
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '6') {
        count += 1;
      }
    }
    console.log(count);
  }
});