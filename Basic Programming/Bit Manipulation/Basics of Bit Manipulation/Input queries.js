const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  let Q = parseInt(input[0]);
  let idx = 1;

  const msb = (x) => {
    if (x === 0n) return 0;
    return BigInt(x.toString(2).length - 1);
  };

  const bitwise_AND = (l, r) => {
    const ml = msb(l);
    const mr = msb(r);
    if (ml !== mr) return 0n;

    const xorMSB = msb(l ^ r);
    return l & ~((1n << (xorMSB + 1n)) - 1n);
  };

  const solve = (l, r, k) => {
    if (k === 1n) return r;

    const m = 1n << msb(r);
    const u = m - 1n;
    const v = k - 1n;

    if (r - l === v) return bitwise_AND(l, r);

    let ans = 0n;
    if (u - l >= v) ans = bitwise_AND(u - v, u);
    if (r - m >= v) {
      const andVal = bitwise_AND(r - v, r);
      if (andVal > ans) ans = andVal;
    }

    return ans;
  };

  for (; Q--; idx++) {
    const [lStr, rStr, kStr] = input[idx].split(" ");
    const l = BigInt(lStr), r = BigInt(rStr), k = BigInt(kStr);
    console.log(solve(l, r, k).toString());
  }
});
