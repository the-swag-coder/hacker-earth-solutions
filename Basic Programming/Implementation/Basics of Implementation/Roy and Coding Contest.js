const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line.trim());
}).on('close', () => {
  const t = parseInt(input[0]);
  let idx = 1;

  for (let _ = 0; _ < t; _++) {
    let [npc, npd] = input[idx++].split(' ').map(Number);

    let time = 0;
    let cnt = 0;
    let pc = 1;
    let pd = 1;

    if (npc === 1) {
      cnt = 0;
    } else {
      while (time < npc) {
        if (pc < npd) {
          time += pc;
          pc = pd;
          pd = pd + pd;
          cnt++;
        } else {
          time += npd;
          cnt++;
        }
      }
    }

    console.log(cnt);
  }
});
