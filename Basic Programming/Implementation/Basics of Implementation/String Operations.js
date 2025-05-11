const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  let line = 0;
  let str = input[line++];
  let t1 = parseInt(input[line++]);

  // Perform t1 character updates
  str = str.split('');
  for (let i = 0; i < t1; i++) {
    const [ind, ch] = input[line++].split(' ');
    str[parseInt(ind) - 1] = ch;
  }

  console.log(str.join(''));

  const t2 = parseInt(input[line++]);
  const rev = [...str]; // copy of string after first modifications

  // Perform t2 substring reversals
  for (let i = 0; i < t2; i++) {
    const [start, end] = input[line++].split(' ').map(Number);
    const reversedPart = str.slice(start - 1, end).reverse();
    for (let j = 0; j < reversedPart.length; j++) {
      str[start - 1 + j] = reversedPart[j];
    }
  }

  const finalStr = str.join('');
  console.log(finalStr);

  // Count matching characters between original and modified
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === rev[i]) count++;
  }
  console.log(count);
});
