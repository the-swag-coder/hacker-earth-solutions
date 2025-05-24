const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let testCases = parseInt(input[0]);
  let index = 1;

  for (let t = 0; t < testCases; t++) {
    const length = parseInt(input[index++]);
    const str = input[index++];

    let mask = 0;
    let count = 0;
    const charMap = new Map();
    charMap.set(0, 1);

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i) - 'a'.charCodeAt(0);
      mask ^= (1 << charCode);
      count += (charMap.get(mask) || 0);
      charMap.set(mask, (charMap.get(mask) || 0) + 1);
    }

    console.log(count);
  }
});
