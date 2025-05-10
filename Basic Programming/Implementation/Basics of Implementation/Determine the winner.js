const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const T = parseInt(input[idx++]);

  for (let z = 0; z < T; z++) {
    const s = input[idx++].split(" ").map(Number);
    const d = input[idx++].split(" ").map(Number);
    const f = input[idx++].split(" ").map(Number);
    const c = input[idx++].split(" ").map(Number);

    const f_time = Math.max(f[0], f[1], f[2], f[3]);
    const c_time = Math.max(c[0], c[1], c[2], c[3]);

    let f_score = 0;
    let c_score = 0;
    for (let i = 0; i < 4; i++) {
      f_score += Math.max(Math.floor(s[i] / 2), s[i] - d[i] * f[i]);
      c_score += Math.max(Math.floor(s[i] / 2), s[i] - d[i] * c[i]);
    }

    if (f_score === c_score) {
      if (f_time === c_time) {
        console.log("Tie");
      } else if (f_time > c_time) {
        console.log("Cisco");
      } else {
        console.log("Flash");
      }
    } else {
      if (f_score > c_score) {
        console.log("Flash");
      } else {
        console.log("Cisco");
      }
    }
  }
});
