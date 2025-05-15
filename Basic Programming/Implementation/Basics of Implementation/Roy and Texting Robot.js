process.stdin.resume();
process.stdin.setEncoding('utf8');

const keypad = [
  ['.', ',', '?', '!', '1'],
  ['a', 'b', 'c', '2'],
  ['d', 'e', 'f', '3'],
  ['g', 'h', 'i', '4'],
  ['j', 'k', 'l', '5'],
  ['m', 'n', 'o', '6'],
  ['p', 'q', 'r', 's', '7'],
  ['t', 'u', 'v', '8'],
  ['w', 'x', 'y', 'z', '9'],
  ['_', '0'],
];

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let idx = 1;

  while (t--) {
    const s = lines[idx++].trim();
    let lastPos = 0;
    let totalTime = 0;

    for (const ch of s) {
      for (let i = 0; i < keypad.length; i++) {
        const row = keypad[i];
        const j = row.indexOf(ch);
        if (j !== -1) {
          totalTime += j + 1 + (i !== lastPos ? 1 : 0);
          lastPos = i;
          break;
        }
      }
    }
    console.log(totalTime);
  }
});
