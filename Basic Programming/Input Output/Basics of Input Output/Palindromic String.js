const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (S) => {
  let res = true;

  // Check if the string is a palindrome
  for (let i = 0; i <= Math.floor(S.length / 2) - 1; i++) {
    if (S[i] !== S[S.length - i - 1]) {
      res = false;
      break;
    }
  }

  // Output the result
  if (res) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  // Close the readline interface
  rl.close();
});