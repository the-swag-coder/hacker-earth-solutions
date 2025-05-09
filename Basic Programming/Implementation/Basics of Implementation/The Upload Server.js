const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let testCases = 0;

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  testCases = parseInt(inputLines[0]);
  let index = 1;

  for (let Z = 0; Z < testCases; Z++) {
    const s = inputLines[index++];
    let i = 0, no_strings = 0, char_strings = 0;
    let b = false;

    // Process each string
    while (i < s.length) {
      let len = 0;
      let b1 = false;
      while (i < s.length && s[i] !== ' ') {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
          b1 = true;
        }
        i++;
        len++;
      }
      if (b1) {
        char_strings++;
        no_strings++;
      } else {
        if (s[i - len] === '0') {
          b = true;
        } else {
          no_strings++;
        }
      }
      i++;
    }

    if (no_strings > 3 || char_strings !== 1) {
      b = true;
    }

    if (b) {
      console.log("N");
    } else if (no_strings === 2) {
      console.log("M");
    } else {
      console.log("V");
    }
  }
});
