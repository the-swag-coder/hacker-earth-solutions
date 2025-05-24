const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(line.trim());
}).on("close", () => {
  let t = parseInt(input[0]);
  let index = 1;

  while (t--) {
    let n = parseInt(input[index++]);
    let arr = input[index++].split(' ').map(Number);

    let c0 = 0, c1 = 0;

    for (let x of arr) {
      if (x % 2 === 0) c0++;
      else c1++;
    }

    let ok = true;
    if (c0 % 2 === 1 && c1 % 2 === 1) {
      ok = false;
    }

    console.log(ok ? 1 : 0);
  }
});
