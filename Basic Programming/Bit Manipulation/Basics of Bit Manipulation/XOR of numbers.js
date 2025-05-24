const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  const [n, q] = input[0].split(" ").map(Number);
  const a = input[1].split(" ").map(Number);

  const presum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    presum[i + 1] = presum[i] ^ a[i];
  }

  const totalXOR = presum[n];

  let idx = 2;
  for (let _ = 0; _ < q; _++) {
    let [l, r] = input[idx++].split(" ").map(Number);
    l--; r--;

    const xorLR = presum[r + 1] ^ presum[l];
    const answer = totalXOR ^ xorLR;
    console.log(answer);
  }
});
