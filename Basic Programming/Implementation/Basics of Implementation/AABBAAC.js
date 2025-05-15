process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let tests = parseInt(lines[0]);
  let idx = 1;

  while (tests--) {
    const [n, m] = lines[idx++].trim().split(' ').map(Number);
    let st = new Array(n + 1);
    for (let i = 1; i <= n; i++) {
      st[i] = lines[idx++].trim();
    }

    let l = new Array(n + 1);
    l[0] = BigInt(0);
    for (let i = 1; i <= n; i++) {
      l[i] = l[i - 1] * BigInt(2) + BigInt(st[i].length);
    }

    let result = [];
    for (let q = 0; q < m; q++) {
      let x = BigInt(lines[idx++]);
      for (let i = n; i >= 1; i--) {
        if (x >= l[i - 1] * BigInt(2)) {
          let pos = x - l[i - 1] * BigInt(2);
          result.push(st[i][Number(pos)]);
          break;
        } else if (x >= l[i - 1]) {
          x = l[i - 1] * BigInt(2) - x - BigInt(1);
        }
      }
    }
    console.log(result.join(''));
  }
});
