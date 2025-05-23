const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLines = [];

rl.on("line", function (line) {
  inputLines.push(line.trim());
  if (inputLines.length === 3) {
    rl.close();
  }
});

rl.on("close", function () {
  const d = parseInt(inputLines[0]);
  const [oc, of, od] = inputLines[1].split(" ").map(Number);
  const [cs, cb, cm, cd] = inputLines[2].split(" ").map(Number);

  const temp = d - of;
  const costOnline = temp > 0 ? oc + temp * od : oc;

  const time = Math.floor(d / cs);
  const costOffline = cb + cm * time + cd * d;

  if (costOnline <= costOffline) {
    console.log("Online Taxi");
  } else {
    console.log("Classic Taxi");
  }
});
