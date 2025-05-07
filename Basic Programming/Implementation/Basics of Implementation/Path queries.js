const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => inputLines.push(line.trim()));
rl.on('close', () => {
  let currentLine = 0;
  let t = parseInt(inputLines[currentLine++]);
  while (t--) {
    let [n, q] = inputLines[currentLine++].split(' ').map(Number);
    let a = [0].concat(inputLines[currentLine++].split(' ').map(Number)); // 1-indexed

    let x = 0, y = 0;
    for (let i = 1; i <= n; i++) {
      if (a[i] % 2 !== 0) x++;
      else y++;
    }

    for (let i = 1; i < n; i++) {
      currentLine++; // skip edges
    }

    let res = [];
    for (let qq = 0; qq < q; qq++) {
      let [j, k] = inputLines[currentLine++].split(' ').map(Number);
      if (a[j] % 2 !== 0) x--;
      else y--;
      a[j] = k;
      if (a[j] % 2 !== 0) x++;
      else y++;
      res.push((x * (x + 1)) / 2 + (y * (y + 1)) / 2);
    }
    console.log(res.join(' '));
  }
});
