const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let inputLines = [];
rl.on('line', function(line) {
  inputLines.push(line);
});

rl.on('close', function() {
  let t = parseInt(inputLines[0]);
  let lineIndex = 1;

  for (let _ = 0; _ < t; _++) {
    let x = parseInt(inputLines[lineIndex++]);
    let a = inputLines[lineIndex++].trim().split(' ');

    let idxes = {};
    let ans = 0;

    for (let i = 0; i < x; i++) {
      if (idxes.hasOwnProperty(a[i])) {
        ans += i - idxes[a[i]];
      }
      idxes[a[i]] = i;
    }

    console.log(ans);
  }
});
