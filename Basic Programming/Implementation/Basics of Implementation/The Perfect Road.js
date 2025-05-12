const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    const [s, x, n] = input[idx++].split(' ').map(Number);
    const speeds = input[idx++].split(' ').map(Number);
    const maxSpeed = Math.max(...speeds);
    const count = speeds.filter(speed => speed === maxSpeed).length;

    if (count > 1) {
      console.log("Many Roads");
    } else {
      console.log(speeds.indexOf(maxSpeed) + 1);
    }
  }
});
