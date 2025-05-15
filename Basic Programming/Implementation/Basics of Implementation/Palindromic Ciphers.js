process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let idx = 1;

  while (t--) {
    const s1 = lines[idx++].trim();
    const s2 = s1.split('').reverse().join('');

    if (s1 === s2) {
      console.log("Palindrome");
    } else {
      let prod = 1n;
      for (const ch of s1) {
        prod *= BigInt(ch.charCodeAt(0) - 96);
      }
      console.log(prod.toString());
    }
  }
});
