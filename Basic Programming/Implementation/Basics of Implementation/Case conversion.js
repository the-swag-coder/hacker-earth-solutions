const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const T = parseInt(input[0]);

  for (let i = 1; i <= T; i++) {
    const s = input[i];
    const result = caseConversion(s);
    console.log(result);
  }
});

function caseConversion(s) {
  let res = '';

  for (let c of s) {
    if (c >= 'A' && c <= 'Z') {
      res += '_' + c.toLowerCase();
    } else {
      res += c;
    }
  }

  // Remove leading underscore if present
  if (res[0] === '_') {
    res = res.slice(1);
  }

  return res;
}
