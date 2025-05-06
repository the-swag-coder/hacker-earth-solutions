const readline = require('readline');

function solve() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (s) => {
    // Count the occurrences of each character
    const charCount = {};

    // Count each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if the count of 'z' is half the count of 'o'
    // This is checking if the string could form "zozo" pattern
    // where there are twice as many 'o's as 'z's
    if ((charCount['z'] || 0) * 2 === (charCount['o'] || 0)) {
      console.log("Yes");
    } else {
      console.log("No");
    }

    rl.close();
  });
}

solve();