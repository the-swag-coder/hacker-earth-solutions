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
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 1; test <= t; test++) {
    const [n, players] = input[idx++].split(" ").map(Number);
    const s = input[idx++];

    const score = Array(players).fill(0);
    let p1 = 0, p2 = 1, next = 2;

    for (let i = 0; i < 6 * n; i++) {
      const ch = s[i];
      if (ch === 'W') {
        p1 = next++;
      } else if (ch === '6') {
        score[p1] += 6;
      } else if (ch === '4') {
        score[p1] += 4;
      } else if (ch === '2') {
        score[p1] += 2;
      } else if (ch === '1') {
        score[p1] += 1;
        [p1, p2] = [p2, p1]; // rotate strike
      }
      if (i % 6 === 5) {
        [p1, p2] = [p2, p1]; // end of over, rotate strike
      }
    }

    console.log(`Case ${test}:`);
    for (let i = 0; i < players; i++) {
      let output = `Player ${i + 1}: `;
      if (i === p1 || i === p2) {
        output += score[i] + "*";
      } else if (i < next) {
        output += score[i];
      } else {
        output += "DNB";
      }
      console.log(output);
    }
  }
});
