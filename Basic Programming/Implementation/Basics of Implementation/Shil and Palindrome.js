const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = "";

rl.on("line", function (line) {
  input += line.trim();
  rl.close();
});

rl.on("close", function () {
  const s = input;
  const count = {};

  for (const ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  let pal = "";
  let mid = "";
  let odd = 0;

  for (const ch in count) {
    let v = count[ch];
    if (v % 2 === 1) {
      odd++;
      mid += ch;
      v--;
    }
    pal += ch.repeat(v / 2);
  }

  if (odd > 1) {
    console.log("-1");
  } else {
    pal = [...pal].sort().join("");
    console.log(pal + mid + pal.split("").reverse().join(""));
  }
});
