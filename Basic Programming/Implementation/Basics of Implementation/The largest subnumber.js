const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', line => input.push(line.trim()));
rl.on('close', () => {
  let T = parseInt(input[0]);
  let idx = 1;

  while (T--) {
    const [nStr, kStr] = input[idx++].split(' ');
    const s = input[idx++];

    const n = parseInt(nStr);
    const k = BigInt(kStr);

    let x = 0;
    for (let ch of s) {
      x ^= (ch.charCodeAt(0) - '0'.charCodeAt(0));
    }

    let t = 0n;
    let u = 0, v = -1, z = 1;
    let p = 1n;

    for (let i = n - 1; i >= 1; i--) {
      const c = BigInt(s[i].charCodeAt(0) - '0'.charCodeAt(0));

      if (c !== 0n) z = 0;
      x ^= Number(c);

      t = (t + c * p) % k;
      p = (p * 10n) % k;

      if (!z && c !== 0n && t === 0n) {
        if (x >= v) {
          u = i;
          v = x;
        }
      }
    }

    if (v < 0) {
      console.log(-1);
    } else {
      console.log(s.substring(u));
    }
  }
});
