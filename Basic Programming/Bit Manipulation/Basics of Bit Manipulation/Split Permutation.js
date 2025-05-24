const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  let tc = parseInt(input[0]);
  let index = 1;

  while (tc--) {
    let n = parseInt(input[index++]);
    let v = input[index++].split(' ').map(BigInt);
    let v1 = input[index++].split(' ').map(BigInt);

    let sum = 0n, sum1 = 0n, c = 0;

    for (let i = 0; i < n; i++) {
      sum += v[i];
      sum1 += v1[i];
      if (sum === sum1) {
        c++;
      }
    }

    console.log(c);
  }
});
