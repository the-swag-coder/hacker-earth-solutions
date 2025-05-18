const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;

  for (let i = 0; i < t; i++) {
    let [bt1, bt2, mt1, mt2] = input[idx++].split(' ').map(Number);

    if (bt1 > bt2) [bt1, bt2] = [bt2, bt1];
    if (mt1 > mt2) [mt1, mt2] = [mt2, mt1];

    bt1 = Math.max(bt1, mt1);
    bt2 = Math.min(bt2, mt2);

    if (bt1 === bt2) {
      console.log("Point");
    } else if (bt1 > bt2) {
      console.log("Line");
    } else {
      console.log("Nothing");
    }
  }
});
