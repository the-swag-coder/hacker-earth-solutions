const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;

  for (let i = 0; i < t; i++) {
    const [t0, t1, t2, v1, v2, d] = input[idx++].split(' ').map(Number);

    if (t0 > t1 && t0 > t2) {
      console.log("-1");
    } else {
      const d1 = (d * 60) / v1;
      const d2 = (d * 60) / v2;
      let res;

      if (t0 > t1 && t0 <= t2) {
        res = d2 + t2;
      } else if (t0 > t2 && t0 <= t1) {
        res = d1 + t1;
      } else if (t0 <= t1 && t0 <= t2) {
        res = Math.min(t1 + d1, t2 + d2);
      }

      console.log(Math.ceil(res));
    }
  }
});
