const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  const n = input[0];
  const arr = input.slice(1);

  function maxForGivenRatio(arr, n, r) {
    const numbers = new Array(200000).fill(0);
    let maxx = 1;
    for (let i = 0; i < n; i++) {
      let x = arr[i];
      let idx = 100000 + x;
      if (numbers[idx] === 0) {
        numbers[idx] = 1;
        let rx = r * x;
        if (rx > -100000 && rx < 100000) {
          numbers[100000 + rx] = -1;
        }
      } else if (numbers[idx] === -1) {
        let prevIdx = 100000 + Math.floor(x / r);
        numbers[idx] = numbers[prevIdx] + 1;
        maxx = Math.max(maxx, numbers[idx]);
        let rx = r * x;
        if (rx > -100000 && rx < 100000) {
          numbers[100000 + rx] = -1;
        }
      }
    }
    return maxx;
  }

  function forOneZero(arr, n) {
    arr.sort((a, b) => a - b);
    let maxx = 0;
    let maxElem = arr[0];
    let i = 0;
    while (i < n) {
      let count = 0;
      let elem = arr[i];
      while (i < n && arr[i] === elem) {
        count++;
        i++;
      }
      if (count > maxx) {
        maxx = count;
        maxElem = elem;
      }
    }
    if (maxElem === 0) {
      return Math.min(maxx + 1, n);
    } else {
      return maxx;
    }
  }

  let maxx = 1;
  for (let r = 2; r < 100; r++) {
    maxx = Math.max(maxx, maxForGivenRatio(arr, n, r));
  }
  for (let r = -1; r > -100; r--) {
    maxx = Math.max(maxx, maxForGivenRatio(arr, n, r));
  }
  maxx = Math.max(maxx, forOneZero(arr, n));
  console.log(maxx);
});
