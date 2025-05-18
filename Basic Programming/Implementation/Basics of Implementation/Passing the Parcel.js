function findLastStandingPlayer(n, song) {
  let st = Array(n).fill(true);
  let ne = song.length;
  let c = 0;
  let j = 0;
  let i = 0;

  while (c < n - 1) {
    if (i >= ne) i = i % ne;
    if (j >= n) j = j % n;

    if (song[i] === 'a') {
      if (st[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    } else if (song[i] === 'b') {
      if (st[j]) {
        c++;
        i++;
        st[j] = false;
        j++;
      } else {
        j++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (st[i]) {
      console.log(i + 1);
      break;
    }
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', line => inputLines.push(line));
rl.on('close', () => {
  const n = parseInt(inputLines[0]);
  const song = inputLines[1].trim();
  findLastStandingPlayer(n, song);
});
