process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', function(chunk) {
  input += chunk;
});

process.stdin.on('end', function() {
  const lines = input.trim().split('\n');
  const [n, l, m] = lines[0].split(' ').map(Number);
  const arr = lines.slice(1).join(' ').split(' ').map(Number);

  let cnt = 0;
  let totalWays = 0;

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];

    if (x <= l)
      cnt++;

    if (cnt === m) {
      cnt--;
      totalWays++;
    }

    if (x > l)
      cnt = 0;
  }

  console.log(totalWays);
});
