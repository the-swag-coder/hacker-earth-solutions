process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0], 10);
  let lineIndex = 1;

  while (t--) {
    const [n, sum] = lines[lineIndex++].trim().split(' ').map(Number);
    const arr = [];
    for(let i = 0; i < n; i++){
      arr.push(parseInt(lines[lineIndex++], 10));
    }

    let flag = false;
    for (let i = 0; i < n; i++) {
      let s = 0;
      for (let j = i; j < n; j++) {
        s += arr[j];
        if (s === sum) {
          flag = true;
          break;
        }
        if (s > sum) break;
      }
      if (flag) break;
    }

    console.log(flag ? "YES" : "NO");
  }
});
