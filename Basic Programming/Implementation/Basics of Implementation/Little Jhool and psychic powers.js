const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';

rl.on('line', line => {
  input = line.trim();
}).on('close', () => {
  let s = input;
  let ch = s[0];
  let count = 0;
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ch) {
      ch = s[i];
      count = 1;
    } else {
      count++;
    }
    if (count === 6) {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("Sorry, sorry!");
  } else {
    console.log("Good luck!");
  }
});
