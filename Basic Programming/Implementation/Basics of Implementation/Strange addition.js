const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];
rl.on("line", line => inputLines.push(line.trim()));
rl.on("close", () => {
  const t = parseInt(inputLines[0]);

  for (let i = 1; i <= t; i++) {
    const [a, b] = inputLines[i].split(' ');
    const ar = parseInt(a.split('').reverse().join(''));
    const br = parseInt(b.split('').reverse().join(''));
    const res = (ar + br).toString();
    console.log(parseInt(res.split('').reverse().join('')));
  }
});
