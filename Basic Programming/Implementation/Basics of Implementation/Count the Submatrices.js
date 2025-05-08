const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [M, N, P] = input[0].split(" ").map(Number);
  const Matrix = input.slice(1, 1 + M).map(line => line.split(" ").map(Number));

  const result = solve(M, N, P, Matrix);
  console.log(result);
});

function solve(M, N, P, Matrix) {
  let res = 0;

  for (let i = 0; i < M; i++) {
    let sums = new Array(N).fill(0);

    for (let j = i; j < M; j++) {
      let counts = new Array(P).fill(0);
      counts[0] = 1;

      for (let k = 0; k < N; k++) {
        sums[k] += Matrix[j][k];
      }

      let x = 0;
      for (let k = 0; k < N; k++) {
        x = (x + sums[k]) % P;
        res += counts[x];
        counts[x]++;
      }
    }
  }

  return res;
}
