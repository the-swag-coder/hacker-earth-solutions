const readline = require('readline');

// Create interface for reading from standard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read input and process it
rl.on('line', (s) => {
  let flag1 = 0;
  let flag2 = 0;

  // Check if the sum of ASCII codes of character pairs is even
  // This is what the C code does with (s[0]+s[1])%2==0 etc.
  if ((s.charCodeAt(0) + s.charCodeAt(1)) % 2 === 0 &&
    (s.charCodeAt(3) + s.charCodeAt(4)) % 2 === 0 &&
    (s.charCodeAt(4) + s.charCodeAt(5)) % 2 === 0 &&
    (s.charCodeAt(7) + s.charCodeAt(8)) % 2 === 0) {
    flag1 = 1;
  }

  // Check if the third character is a vowel
  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  if (vowels.includes(s[2])) {
    flag2 = 1;
  }

  // Output based on both flags
  if (flag1 === 1 && flag2 === 0) {
    console.log("valid");
  } else {
    console.log("invalid");
  }

  // Close readline
  rl.close();
});