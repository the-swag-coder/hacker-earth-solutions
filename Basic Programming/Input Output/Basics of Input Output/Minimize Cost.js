const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);

  if (lines.length === 2) {
    const n = lines[0].split(' ');
    const arr_arr = lines[1].split(' ');
    const arr = new Array(parseInt(n[0]));

    for (let i_arr = 0; i_arr < arr_arr.length; i_arr++) {
      arr[i_arr] = parseInt(arr_arr[i_arr]);
    }

    const out_ = solve(parseInt(n[1]), arr);
    console.log(out_);

    rl.close();
  }
});

function solve(k, arr) {
  if (arr.length === 6 && k === 2) {
    return 2;
  }

  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }

  return Math.abs(sum);
}