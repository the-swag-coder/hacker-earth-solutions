const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [N, L] = input[0].split(" ").map(Number);
  const names = input.slice(1, 1 + N);

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  function canBecomePalindrome(s) {
    if (isPalindrome(s)) return true;

    const n = s.length;

    // Try all single reversals
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let temp = s.split('');
        const sub = temp.slice(i, j + 1).reverse();
        temp.splice(i, j - i + 1, ...sub);
        if (isPalindrome(temp.join(''))) return true;
      }
    }

    // Try all pairs of non-overlapping reversals
    for (let i1 = 0; i1 < n; i1++) {
      for (let j1 = i1; j1 < n; j1++) {
        for (let i2 = j1 + 1; i2 < n; i2++) {
          for (let j2 = i2; j2 < n; j2++) {
            let temp = s.split('');

            const sub1 = temp.slice(i1, j1 + 1).reverse();
            temp.splice(i1, j1 - i1 + 1, ...sub1);

            const sub2 = temp.slice(i2, j2 + 1).reverse();
            temp.splice(i2, j2 - i2 + 1, ...sub2);

            if (isPalindrome(temp.join(''))) return true;
          }
        }
      }
    }

    return false;
  }

  let successful = 0;
  for (const name of names) {
    if (canBecomePalindrome(name)) successful++;
  }

  console.log(successful);
});
