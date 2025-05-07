const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (time) => {
  let hrs = time.substring(0, 2);
  let min = time.substring(3, 5);
  let hr = parseInt(hrs, 10);
  let mi = parseInt(min, 10);
  let totalmin = (hr * 60) + mi;
  let times = (totalmin * 11) / 720 + 1;
  console.log(Math.floor(times));
  rl.close();
});
