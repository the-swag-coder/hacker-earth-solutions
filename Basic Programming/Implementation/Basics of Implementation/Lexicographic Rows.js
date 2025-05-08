const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  let [n, m] = input[0].split(' ').map(Number);
  let a = input.slice(1, 1 + n).map(line => line.split(''));
  let del = Array(m).fill(false);
  let ans = 0;

  for (let j = 0; j < m; j++) {
    let to_del = false;
    for (let i = 1; i < n; i++) {
      if (a[i][j] < a[i - 1][j]) {
        to_del = true;
        for (let k = 0; k < j; k++) {
          if (!del[k] && a[i][k] > a[i - 1][k]) {
            to_del = false;
            break;
          }
        }
        if (to_del) break;
      }
    }
    del[j] = to_del;
    if (to_del) ans++;
  }

  console.log(ans);
});
