const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const n = parseInt(input[0]);
  const bag = [parseInt(input[1])];
  console.log("-1 -1");

  for (let i = 2; i < n + 1; i++) {
    const x = parseInt(input[i]);

    if (x > bag[bag.length - 1]) {
      console.log(`${bag[bag.length - 1]} -1`);
      bag.push(x);
    } else if (x < bag[0]) {
      console.log(`-1 ${bag[0]}`);
      bag.unshift(x);
    } else {
      let left = 0, right = bag.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (bag[mid] < x) left = mid + 1;
        else right = mid;
      }
      console.log(`${bag[left - 1]} ${bag[left]}`);
      bag.splice(left, 0, x);
    }
  }
});
