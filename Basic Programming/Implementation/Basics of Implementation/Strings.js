process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let idx = 1;

  while (t--) {
    const [s1, s2] = lines[idx++].trim().split(' ');
    if (s1 === s2 || (s1 === "2" && s2 === "4") || (s1 === "4" && s2 === "2")) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
});
