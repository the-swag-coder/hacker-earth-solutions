const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  // Process input after all lines have been read
  const l = parseInt(lines[0]);
  const t = parseInt(lines[1]);

  for (let i = 0; i < t; i++) {
    const [m, n] = lines[i + 2].split(' ').map(Number);

    if (m < l || n < l) {
      console.log("UPLOAD ANOTHER");
    } else if (m === n) {
      console.log("ACCEPTED");
    } else {
      console.log("CROP IT");
    }
  }
});