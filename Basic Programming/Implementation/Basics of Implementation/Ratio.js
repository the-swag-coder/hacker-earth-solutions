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
  let index = 0;
  const t = parseInt(inputLines[index++]);

  function gcd(x, y) {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  }

  for (let test = 0; test < t; test++) {
    const n = parseInt(inputLines[index++]);
    const arr = [];
    let a = 0, b = 0;

    for (let i = 0; i < n; i++) {
      const [timesStr, inp] = inputLines[index++].split(' ');
      const times = parseInt(timesStr);
      arr.push({ times, inp });

      if (inp === 'A') a += times;
      else b += times;
    }

    if (a === 0 || b === 0) {
      console.log(Math.max(a, b));
      continue;
    }

    const gc = gcd(a, b);
    const ratioA = a / gc;
    const ratioB = b / gc;

    let ra = 0, rb = 0, count = 0;

    for (const { times, inp } of arr) {
      if (inp === 'A') {
        ra += times;
        if (rb !== 0 && rb % ratioB === 0) {
          const qu = rb / ratioB;
          if (ra >= qu * ratioA && (ra - times) < qu * ratioA) {
            count++;
            rb = 0;
            ra -= qu * ratioA;
          }
        }
      } else {
        rb += times;
        if (ra !== 0 && ra % ratioA === 0) {
          const qu = ra / ratioA;
          if (rb >= qu * ratioB && (rb - times) < qu * ratioB) {
            count++;
            ra = 0;
            rb -= qu * ratioB;
          }
        }
      }
    }

    console.log(count);
  }
});
