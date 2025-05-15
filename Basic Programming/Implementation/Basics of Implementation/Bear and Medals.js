const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let index = 1;

  for (let testCase = 0; testCase < t; testCase++) {
    const n = parseInt(input[index++]);

    let g = 0, s = 0, b = 0, mx = 0;

    for (let i = 0; i < n; i++) {
      const [gtemp, stemp, btemp] = input[index++].split(" ").map(Number);
      g += gtemp;
      s += stemp;
      b += btemp;
      mx = Math.max(mx, gtemp + stemp + btemp);
    }

    console.log(Math.max(mx, g, s, b));
  }
});
