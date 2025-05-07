const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const T = parseInt(input[0]);
  for (let i = 1; i <= T; i++) {
    const x = input[i];
    for (const ch of x) {
      let c = 0;
      const code = ch.charCodeAt(0);
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57) || (ch === '.') || (ch === '-')) {
        c = 1;
      }
      console.assert(c === 1);
    }

    const integer_expr = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/;

    if (integer_expr.test(x)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
});
