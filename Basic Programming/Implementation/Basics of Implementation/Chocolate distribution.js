const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const T = parseInt(inputLines[idx++], 10);

  for (let t = 0; t < T; t++) {
    let [n, m] = inputLines[idx++].split(" ").map(Number);
    let arr = inputLines[idx++].split(" ").map(BigInt);
    m = BigInt(m);

    let last_modulo = Array(Number(m)).fill(-1n);
    last_modulo[0] = 0n;

    let sum = 0n;
    let ans = 0n;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
      let tmp = Number(sum % m);
      if (last_modulo[tmp] === -1n) {
        last_modulo[tmp] = sum;
      } else {
        let diff = sum - last_modulo[tmp];
        if (diff > ans) ans = diff;
      }
    }

    console.log((ans / m).toString());
  }
});
