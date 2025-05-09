const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const [p, s, t, h, x] = line.trim().split(" ").map(Number);

  let stamina = s;
  let timeLeft = x;
  let t1 = 0, t2 = 0;

  while (timeLeft > 0) {
    if (stamina > t) {
      t1++;
    } else {
      t2++;
    }
    stamina--;
    timeLeft--;
  }

  console.log(p * t1 + h * t2);
  rl.close();
});
