const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => input.push(line));
rl.on("close", () => {
  let index = 0;

  const T = parseInt(input[index++]);

  for (let t = 0; t < T; t++) {
    const B = parseInt(input[index++]);

    let mi = 1n;
    let ma = 1n;

    for (let i = 0; i < B; i++) {
      const tokens = input[index++].split(" ");
      const type = tokens[0];
      let x = 0n;

      if (type !== 'N') {
        x = BigInt(tokens[1]);
      }

      const func = (a, type, x) => {
        switch (type) {
          case 'N': return -a;
          case '+': return a + x;
          case '-': return a - x;
          case '*': return a * x;
          case '/': return a / x;
          default: throw new Error("Invalid operator");
        }
      };

      const maybe = [
        mi,
        ma,
        func(mi, type, x),
        func(ma, type, x)
      ];

      maybe.sort((a, b) => (a < b ? -1 : 1));
      mi = maybe[0];
      ma = maybe[maybe.length - 1];

      const M = 10n ** 18n;
      if (mi < -M || ma > M) throw new Error("Value out of bounds");
    }

    console.log(ma.toString());
  }
});
