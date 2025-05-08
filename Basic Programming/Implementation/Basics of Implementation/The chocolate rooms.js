const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  let idx = 0;
  const T = parseInt(input[idx++]);

  for (let t = 0; t < T; t++) {
    const [N, K] = input[idx++].split(" ").map(Number);
    const s = new Set();

    for (let i = 0; i < N; i++) {
      const P = parseInt(input[idx++]);
      for (let j = 0; j < P; j++) {
        const S = input[idx++];
        s.add(S);
      }
    }

    if (s.size >= K) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
});
