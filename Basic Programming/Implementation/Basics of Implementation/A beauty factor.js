const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkBeautyFactor(n) {
  let su = 0;
  for (let i of String(n)) {
    su += parseInt(i);
  }

  if (String(su).length > 1) {
    su = checkBeautyFactor(su);
  }

  return su;
}

rl.on('line', (input) => {
  const [b, k] = input.split(' ').map(Number);

  if (k === 9) {
    if (b === 9) {
      console.log(123456789);
    } else {
      console.log(-1);
    }
  } else {
    let n = parseInt("1" + "0".repeat(k-1));

    while (true) {
      if (String(n).includes('0')) {
        n += 1;
        continue;
      }

      const nStr = String(n);
      if (new Set(nStr).size !== nStr.length) {
        n += 1;
        continue;
      }

      const beautyFactor = checkBeautyFactor(n);

      if (beautyFactor === b) {
        console.log(n);
        break;
      }

      n += 1;
      if (String(n).length > k) {
        console.log(-1);
        break;
      }
    }
  }

  rl.close();
});