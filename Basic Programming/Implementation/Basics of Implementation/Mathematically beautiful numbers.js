process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let index = 1;

  while (t--) {
    let [xStr, kStr] = lines[index++].split(' ');
    let x = BigInt(xStr);  // BigInt for large numbers
    let k = BigInt(kStr);

    let m = new Array(40).fill(0);
    let cnt = 0n; // BigInt count

    while (x > 0n) {
      cnt += 1n;
      m[Number(x % k)]++;
      x = x / k;
    }

    if (m[0] + m[1] === Number(cnt)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});
