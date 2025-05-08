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
  let lineIndex = 0;
  let t = parseInt(lines[lineIndex++]);

  while (t--) {
    const n = parseInt(lines[lineIndex++]);
    const arr = lines[lineIndex++].split(" ").map(Number);

    // Check first condition
    if (arr[0] > 1) {
      console.log("-1");
      continue;
    }

    let ch = 'a';
    let st = "a";
    let valid = true;

    for (let i = 1; i < n; i++) {
      if (arr[i] > i + 1 || arr[i] < arr[i - 1] || arr[i] - arr[i - 1] > 1) {
        st = "-1";
        valid = false;
        break;
      } else if (arr[i] === arr[i - 1]) {
        st += "a";
      } else {
        // Increment character and add to string
        ch = String.fromCharCode(ch.charCodeAt(0) + 1);
        st += ch;
      }
    }

    console.log(st);
  }
});