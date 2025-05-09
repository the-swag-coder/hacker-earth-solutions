const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
let t = null;

rl.on("line", (line) => {
  inputLines.push(line);
  if (t === null) {
    t = parseInt(line);
  } else if (inputLines.length - 1 === t) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 1; i <= t; i++) {
    const s = inputLines[i];
    let a = "", b = "", op;

    // Parse expression
    for (let j = 0; j < s.length; j++) {
      if (['+', '-', '*', '/'].includes(s[j])) {
        op = s[j];
        a = b;
        b = "";
        continue;
      }
      b += (s[j] === '9') ? '8' : s[j];
    }

    // Convert base-9 to BigInt
    const toDecimal = (str) => {
      let val = 0n, mul = 1n;
      for (let i = str.length - 1; i >= 0; i--) {
        val += BigInt(str.charCodeAt(i) - 48) * mul;
        mul *= 9n;
      }
      return val;
    };

    const vala = toDecimal(a);
    const valb = toDecimal(b);
    let ans;

    // Arithmetic using BigInt
    if (op === '+') ans = vala + valb;
    else if (op === '-') ans = vala - valb;
    else if (op === '*') ans = vala * valb;
    else ans = vala / valb;

    // Convert BigInt back to base-9 with '9' instead of '8'
    const fromDecimal = (num) => {
      if (num === 0n) return "0";
      let result = "";
      while (num > 0n) {
        let digit = num % 9n;
        result = ((digit === 8n) ? '9' : digit.toString()) + result;
        num /= 9n;
      }
      return result;
    };

    console.log(fromDecimal(ans));
  }
});
