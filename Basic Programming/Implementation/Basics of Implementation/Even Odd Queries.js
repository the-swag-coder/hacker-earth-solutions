const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);
  const output = [];

  for (let tc = 0; tc < t; tc++) {
    const [n, q] = input[idx++].split(' ').map(Number);
    const arr = input[idx++].split(' ').map(Number);

    const ctEven = Array(n + 1).fill(0);
    const ctOdd = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
      const parity = arr[i - 1] % 2;
      ctEven[i] = ctEven[i - 1] + (parity === 0 ? 1 : 0);
      ctOdd[i] = ctOdd[i - 1] + (parity === 1 ? 1 : 0);
    }

    for (let qi = 0; qi < q; qi++) {
      const [k, l, r] = input[idx++].split(' ').map(Number);
      const total = r - l + 1;
      const p = (k === 0 ? ctEven[r] - ctEven[l - 1] : ctOdd[r] - ctOdd[l - 1]);

      if (p === 0 || p === total) {
        output.push(`${p / total}`);
      } else {
        let a = p, b = total;
        while (b !== 0) {
          let temp = b;
          b = a % b;
          a = temp;
        }
        const g = a;
        output.push(`${p / g} ${total / g}`);
      }
    }
  }

  console.log(output.join('\n'));
});
