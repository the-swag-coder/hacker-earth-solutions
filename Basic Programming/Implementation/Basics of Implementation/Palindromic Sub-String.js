const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = "";

rl.on("line", function (line) {
  input += line;
});

rl.on("close", function () {
  console.log(process_string(input.trim()));
});

function process_string(S) {
  let maxLen = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 2; j <= S.length; j++) { // substrings of length > 1
      let sub = S.slice(i, j);
      let rev = sub.split('').reverse().join('');
      if (S.includes(rev)) {
        maxLen = Math.max(maxLen, sub.length);
      }
    }
  }

  if (maxLen > 0) {
    return "YES\n" + maxLen;
  } else {
    return "NO";
  }
}
