process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let idx = 1;

  while (t--) {
    const a = lines[idx++].trim();
    const b = lines[idx++].trim();
    let res = 0;

    for (let i = 0; i < 26; i++) {
      const ch = String.fromCharCode(97 + i);
      const c1 = (a.match(new RegExp(ch, 'g')) || []).length;
      const c2 = (b.match(new RegExp(ch, 'g')) || []).length;

      if (c1 !== c2) {
        if (c1 > c2) {
          if (res === -1) {
            res = 0;
            break;
          }
          res = 1;
        } else {
          if (res === 1) {
            res = 0;
            break;
          }
          res = -1;
        }
      }
    }

    if (res === 1) {
      console.log("You win some.");
    } else if (res === -1) {
      console.log("You lose some.");
    } else {
      console.log("You draw some.");
    }
  }
});
