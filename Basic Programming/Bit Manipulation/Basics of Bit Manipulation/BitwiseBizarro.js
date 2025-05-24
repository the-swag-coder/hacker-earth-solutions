const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", (line) => inputLines.push(line.trim()));
rl.on("close", () => {
  let T = parseInt(inputLines[0]);
  let lineIndex = 1;

  while (T--) {
    const n = parseInt(inputLines[lineIndex++]);
    const pos = Array(31).fill(0);
    let ans = 0;

    const arr = inputLines[lineIndex++].split(' ').map(Number);

    for (let i = 0; i < n; i++) {
      const a = arr[i];
      const temp = [0];

      for (let j = 0; j < 31; j++) {
        if (a & (1 << j)) {
          pos[j] = i + 1;
        }
        temp.push(pos[j]);
      }

      temp.sort((x, y) => x - y);

      let position = 31, num = 0;
      while (true) {
        num++;
        while (position > 0 && temp[position - 1] === temp[position]) {
          position--;
          num++;
        }
        if (num % 2 === 1) {
          ans += (temp[position] - temp[position - 1]);
        }
        if (position === 0) break;
        position--;
      }
    }

    console.log(ans);
  }
});
