const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (s) => {
  let result = '';

  // Process each character in the string
  for (let i = 0; i < s.length; i++) {
    // Get the ASCII value of the character
    let x = s.charCodeAt(i);

    // Toggle the case
    // If uppercase (ASCII 65-90), convert to lowercase by adding 32
    // If lowercase (ASCII 97-122), convert to uppercase by subtracting 32
    if (x <= 90 && x >= 65) {
      x = x + 32;
    } else if (x >= 97 && x <= 122) {
      x = x - 32;
    }

    // Convert ASCII value back to character and add to result
    result += String.fromCharCode(x);
  }

  // Print the result
  console.log(result);

  // Close the readline interface
  rl.close();
});