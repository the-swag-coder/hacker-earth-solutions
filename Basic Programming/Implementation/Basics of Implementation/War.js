const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => input.push(...line.trim().split(/\s+/)));

rl.on('close', () => {
  let index = 0;
  const t = parseInt(input[index++], 10);

  for (let tc = 0; tc < t; tc++) {
    const n = parseInt(input[index++], 10);

    let m1 = 0;
    for (let i = 0; i < n; i++) {
      m1 = Math.max(m1, parseInt(input[index++], 10));
    }

    let m2 = 0;
    for (let i = 0; i < n; i++) {
      m2 = Math.max(m2, parseInt(input[index++], 10));
    }

    if (m1 === m2) {
      console.log("Tie");
    } else if (m1 > m2) {
      console.log("Bob");
    } else {
      console.log("Alice");
    }
  }
});
