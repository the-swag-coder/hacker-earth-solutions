const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line.trim());

  if (n === 1) {
    console.log(0);
    rl.close();
    return;
  }

  function solve(idx, val, l) {
    if (val > n) return 0;
    if (idx === l) return val === n ? 1 : 0;

    let ans = 0;
    for (let i = 2; i <= 9; i++) {
      ans += solve(idx + 1, val * i, l);
    }
    return ans;
  }

  let ans = 0;
  for (let i = 1; i <= 6; i++) {
    ans += solve(0, 1, i);
  }

  console.log(ans);
  rl.close();
});
