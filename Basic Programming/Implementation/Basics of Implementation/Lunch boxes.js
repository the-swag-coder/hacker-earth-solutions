const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', function (line) {
  inputLines.push(line.trim());
});

rl.on('close', function () {
  let currentLine = 0;
  const t = parseInt(inputLines[currentLine++]);
  for (let i = 0; i < t; i++) {
    if (i !== 0) console.log(); // Print empty line between test cases

    const [N_str, M_str] = inputLines[currentLine++].split(' ');
    let N = parseInt(N_str);
    const M = parseInt(M_str);

    const A = inputLines[currentLine++].split(' ').map(Number);

    A.sort((a, b) => a - b);

    let totalSchools = 0;
    for (let j = 0; j < M; j++) {
      if (N >= A[j]) {
        N -= A[j];
        totalSchools++;
      } else {
        break;
      }
    }
    console.log(totalSchools);
  }
});
