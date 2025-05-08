const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  let t = parseInt(lines[0]);
  let index = 1;
  for (let cs = 1; cs <= t; cs++) {
    const N = parseInt(lines[index++]);
    const a = lines[index++];
    const b = lines[index++];
    console.log(possible(N, a, b) ? "YES" : "NO");
  }
});

function miscnt(a, b, N) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (a[i] !== b[i]) cnt++;
  }
  return cnt;
}

function okay(a, b, i, j, N) {
  let s1 = a.split("");
  let s2 = b.split("");

  // Case 1: swap within s1
  [s1[i], s1[j]] = [s1[j], s1[i]];
  if (miscnt(s1.join(""), b, N) <= 1) return true;

  // Case 2: swap s1[i] with s2[j]
  s1 = a.split("");
  s2 = b.split("");
  [s1[i], s2[j]] = [s2[j], s1[i]];
  if (miscnt(s1.join(""), s2.join(""), N) <= 1) return true;

  return false;
}

function possible(N, a, b) {
  const diff = [];
  for (let i = 0; i < N; i++) {
    if (a[i] !== b[i]) diff.push(i);
  }

  if (diff.length <= 1) return true;

  if (diff.length <= 3) {
    for (let i = 0; i < diff.length; i++) {
      for (let j = i + 1; j < diff.length; j++) {
        if (okay(a, b, diff[i], diff[j], N)) return true;
      }
    }
  }

  return false;
}
