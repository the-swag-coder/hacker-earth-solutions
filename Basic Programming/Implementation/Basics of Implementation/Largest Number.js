const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  let str = input[0].split(' ')[0];
  let k = parseInt(input[0].split(' ')[1]);

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    while (stack.length > 0 && stack[stack.length - 1] < digit && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = stack.join('');
  console.log(result);
});
