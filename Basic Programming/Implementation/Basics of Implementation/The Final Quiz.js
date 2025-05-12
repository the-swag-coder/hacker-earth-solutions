const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  let idx = 0;
  const t = input[idx++];

  for (let u = 0; u < t; u++) {
    const x = input[idx++];
    const y = input[idx++];
    const z = input[idx++];
    const a = input[idx++];
    const b = input[idx++];

    let maxwins = 0;
    let bet = -1;

    for (let i = 0; i <= x; i++) {
      let wins = 0;

      for (let s of [-1, 1]) {
        for (let sa of [-1, 1]) {
          for (let sb of [-1, 1]) {
            const xVal = x - s * i;
            const yVal = y - sa * a;
            const zVal = z - sb * b;
            if (xVal > yVal && xVal > zVal) {
              wins++;
            }
          }
        }
      }

      if (wins > maxwins || bet === -1) {
        maxwins = wins;
        bet = i;
      }
    }

    console.log(bet);
  }
});
