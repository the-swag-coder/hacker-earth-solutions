const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));

rl.on("close", () => {
  let t = parseInt(input[0]);
  let idx = 1;

  while (t--) {
    const n = parseInt(input[idx++]);
    const a = input[idx++].split(' ').map(Number);

    let ans = 0;
    for (let k = 0; k < n;) {
      const current_c = a[k];
      ans++;

      if (current_c === 1) {
        k++;
        continue;
      }

      let no_of_people = current_c - 1;
      let l;

      for (l = k + 1; l < n; l++) {
        if (no_of_people === 0) break;
        if (a[l] === current_c) no_of_people--;
      }

      if (no_of_people > 0) {
        ans = -1;
        break;
      }

      k = l;
    }

    console.log(ans === -1 ? "Invalid Data" : ans);
  }
});
