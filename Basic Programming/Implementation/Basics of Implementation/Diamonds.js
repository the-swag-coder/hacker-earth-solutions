const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line));
rl.on("close", () => {
  let idx = 0;
  const T = parseInt(input[idx++]);

  for (let z = 0; z < T; z++) {
    const [n, m] = input[idx++].split(" ").map(Number);
    const s = [];

    for (let i = 0; i < n; i++) {
      s.push(input[idx++]);
    }

    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < 2 * (m - 1); j++) {
        if (
          s[i][j] === '/' &&
          s[i][j + 2] === '\\' &&
          s[i + 1][j] === '\\' &&
          s[i + 1][j + 2] === '/'
        ) {
          ans++;
        }
      }
    }

    console.log(ans);
  }
});
