const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const input = line.split(" ");
  const x = input[0];
  let k = parseInt(input[1], 10);

  const arr = x.split("");  // Convert the string to an array of characters for easy manipulation

  for (let i = 0; i < arr.length; i++) {
    if (k === 0) break;
    if (arr[i] !== '9') {
      arr[i] = '9';
      k -= 1;
    }
  }

  console.log(arr.join(""));  // Join the array back to a string and output
  rl.close();
});
