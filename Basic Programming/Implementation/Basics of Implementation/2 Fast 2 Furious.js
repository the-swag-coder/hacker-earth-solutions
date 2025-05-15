process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  const n = Number(lines[0]);
  const a = lines[1].split(' ').map(Number);
  const b = lines[2].split(' ').map(Number);

  let maxDiffA = 0;
  for (let i = 0; i < n - 1; i++) {
    const diff = Math.abs(a[i] - a[i + 1]);
    if (diff > maxDiffA) maxDiffA = diff;
  }

  let maxDiffB = 0;
  for (let i = 0; i < n - 1; i++) {
    const diff = Math.abs(b[i] - b[i + 1]);
    if (diff > maxDiffB) maxDiffB = diff;
  }

  if (maxDiffA > maxDiffB) {
    console.log("Dom");
    console.log(maxDiffA);
  } else if (maxDiffA < maxDiffB) {
    console.log("Brian");
    console.log(maxDiffB);
  } else {
    console.log("Tie");
  }
});
