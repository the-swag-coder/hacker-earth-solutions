const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[idx++]);
    const arr = input[idx++].split(" ").map(BigInt);

    // Extend array with extra 200 zeros
    while (arr.length < n + 200) {
      arr.push(0n);
    }

    let ans = 0n;

    for (let i = 0; i < n + 199; i++) {
      arr[i + 1] += arr[i] / 2n;
      arr[i] %= 2n;
      ans += arr[i];
    }

    console.log(ans.toString());
  }
});
