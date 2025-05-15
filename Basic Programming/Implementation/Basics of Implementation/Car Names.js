process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', function (chunk) {
  input += chunk;
});

process.stdin.on('end', function () {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0], 10);

  for (let index = 1; index <= t; index++) {
    let s = lines[index].trim();
    let len = s.length;
    let flag = false;

    if (len % 3 === 0) {
      flag = true;
      let part = len / 3;
      for (let i = 0; i < part - 1; i++) {
        if (
          s[i] !== s[i + 1] ||
          s[i + part] !== s[i + 1 + part] ||
          s[i + 2 * part] !== s[i + 1 + 2 * part]
        ) {
          flag = false;
          break;
        }
      }

      // Check if the characters in the three parts are different
      if (
        s[0] === s[part] ||
        s[part] === s[2 * part] ||
        s[0] === s[2 * part]
      ) {
        flag = false;
      }
    }

    console.log(flag ? "OK" : "Not OK");
  }
});
