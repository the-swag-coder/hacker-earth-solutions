const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(inputLines[0]);
  let index = 1;

  for (let _ = 0; _ < t; _++) {
    const n = parseInt(inputLines[index++]);
    let a = inputLines[index++].split(" ").map(Number).sort((x, y) => x - y);
    let b = inputLines[index++].split(" ").map(Number).sort((x, y) => x - y);

    const mid = Math.floor(n / 2);

    if (a[mid] === b[mid]) {
      console.log(0);
      continue;
    }

    let c = [...a, ...b].sort((x, y) => x - y);
    const median = c[n - 1];

    if (c[n] !== median) {
      console.log(-1);
      continue;
    }

    if (!b.includes(median)) {
      [a, b] = [b, a]; // swap
    }

    const lta = a.filter(val => val < median).length;

    if (!a.includes(median)) {
      if (lta <= mid) {
        console.log(mid - lta + 1);
      } else {
        console.log(lta - mid);
      }
      continue;
    }

    const ltb = b.filter(val => val < median).length;
    const eqa = a.filter(val => val === median).length;
    const eqb = b.filter(val => val === median).length;
    const gta = n - lta - eqa;
    const gtb = n - ltb - eqb;

    const result = Math.max(0, lta - mid, gta - mid, ltb - mid, gtb - mid);
    console.log(result);
  }
});
