function findDates(d, m, y) {
  let until = Math.floor(y / 100) - 1;
  let total = (until + 1) * 11;

  let rem = y % 100;
  if (rem >= 4)
    total += Math.min(rem - 3, 11);

  if (rem >= 3 && rem <= 13) {
    let yc = y;
    let mc = rem - 1;
    let dc = m - 1;

    if (m - mc > 0 || (m === mc && d - dc >= 0)) {
      return total + 1;
    }
  }

  return total > 0 ? total : 0;
}

function processInput(input) {
  const lines = input.trim().split('\n');
  const t = parseInt(lines[0]);
  for (let i = 1; i <= t; i++) {
    const [d1, m1, y1, d2, m2, y2] = lines[i]
      .split(/[: ]/)
      .map(Number);

    let addOne = (d1 + 1 === m1 && m1 + 1 === y1 % 100);
    let result = findDates(d2, m2, y2) - findDates(d1, m1, y1);
    if (addOne) result += 1;
    console.log(result);
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';
rl.on('line', line => input += line + '\n');
rl.on('close', () => processInput(input));
