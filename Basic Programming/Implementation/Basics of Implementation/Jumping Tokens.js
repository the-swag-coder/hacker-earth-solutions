const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    const s = input[idx++];
    const n = s.length;
    let r = 0, b = 0;
    let ri = -1, bi = -1;
    let flag = 1;

    if (n === 2) {
      console.log("2");
      continue;
    }

    for (let i = 0; i < n; i++) {
      if (s[i] === 'R') {
        r++;
        ri = i;
      } else {
        b++;
        bi = i;
      }
      if (i > 0 && s[i] === s[i - 1]) {
        flag = 0;
      }
    }

    if (s === "RBBBR" || s === "BRRRB") {
      console.log("3");
      continue;
    }

    if (flag === 1 || r === 0 || b === 0) {
      console.log(n);
      continue;
    }

    if (r === 1) {
      console.log((ri % 3 === (n - ri - 1) % 3) ? 3 : 2);
      continue;
    }

    if (b === 1) {
      console.log((bi % 3 === (n - bi - 1) % 3) ? 3 : 2);
      continue;
    }

    console.log("2");
  }
});
