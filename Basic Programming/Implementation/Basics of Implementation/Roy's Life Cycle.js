const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(input[0]);
  let x = 0;
  let logs = '';

  for (let i = 1; i <= n; i++) {
    // Replace 'E' with 'S'
    const s = input[i].replace(/E/g, 'S');
    const parts = s.split('S');

    // Get the max length of any substring between 'S'
    let localMax = 0;
    for (const part of parts) {
      localMax = Math.max(localMax, part.length);
    }

    x = Math.max(x, localMax);
    logs += s;
  }

  // Calculate global max from concatenated logs
  const globalParts = logs.split('S');
  let globalMax = 0;
  for (const part of globalParts) {
    globalMax = Math.max(globalMax, part.length);
  }

  console.log(`${x} ${globalMax}`);
});
