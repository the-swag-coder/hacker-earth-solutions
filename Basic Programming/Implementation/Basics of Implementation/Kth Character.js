const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (s) => {
  let result = s;
  let charToRemove = '';

  // Find the first character that is lexicographically greater than the next
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] > s[i + 1]) {
      charToRemove = s[i];
      break;
    }
  }

  // Remove all occurrences of the character found
  if (charToRemove) {
    result = s.split(charToRemove).join('');
  }

  console.log(result);
  rl.close();
});