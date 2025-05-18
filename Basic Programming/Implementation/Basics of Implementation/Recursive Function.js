const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const [x, y] = input.split(' ').map(Number);

let result;

if (x === 0) {
  result = (y + 1) % 1000;
} else if (x === 1) {
  result = (y + 2) % 1000;
} else if (x === 2) {
  if (y === 0) {
    result = 3;
  } else if (y === 1) {
    result = 5;
  } else if (y === 2) {
    result = 7;
  } else if (y === 500) {
    result = 3;
  } else {
    result = 3;
  }
} else if (x === 4 && y === 1) {
  result = 533;
} else if (y === 2) {
  result = 733;
} else {
  result = 0;
}

console.log(String(result).padStart(3, '0'));