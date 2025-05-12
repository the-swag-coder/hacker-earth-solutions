const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const input = line.split(" ").map(Number);
  const n = input[0];
  const k = input[1];
  let x = input[2];  // Changed from const to let

  let lis = Array.from({ length: n }, (_, idx) => idx + 1);
  let flag = 0;
  let size = n;

  while (size !== 1) {
    const noOfKills = x % k;
    if (noOfKills >= size) {
      console.log(x);
      flag = 1;
      break;
    } else {
      const currentIndex = lis.indexOf(x);
      const s = (currentIndex + 1) % size;
      const e = (currentIndex + 1 + noOfKills) % size;

      if (e < s) {
        // Remove from s to end and from start to e
        lis = lis.slice(e, s);
      } else {
        // Remove from s to e
        lis.splice(s, noOfKills);
      }
    }

    if (noOfKills !== 0) {
      size = size - noOfKills;
    }

    // Update x to the next element
    const currentIndex = lis.indexOf(x);
    x = lis[(currentIndex + 1) % lis.length];
  }

  if (flag === 0) {
    console.log(lis[0]);
  }
});