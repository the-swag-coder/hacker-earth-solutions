const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const [N, K] = inputLines[idx++].split(" ").map(Number);
  const grp = Array(N + 1).fill(0);

  for (let i = 0; i < K; i++) {
    const groupData = inputLines[idx++].split(" ").map(Number);
    const S = groupData[0];
    for (let j = 1; j <= S; j++) {
      const x = groupData[j];
      grp[x] = i;
    }
  }

  const Q = parseInt(inputLines[idx++]);
  for (let q = 0; q < Q; q++) {
    const [X, Y] = inputLines[idx++].split(" ").map(Number);
    const diff = Math.abs(grp[X] - grp[Y]);
    const answer = Math.min(diff, K - diff);
    console.log(answer);
  }
});
