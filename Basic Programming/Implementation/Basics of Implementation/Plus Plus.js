const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [rows, cols] = input[0].split(" ").map(Number);
  let arr = [];

  for (let i = 1; i <= rows; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  let max = 0;

  // Iterate over all possible positions of (i, j) and (x, y)
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      for (let x = 1; x < rows - 1; x++) {
        for (let y = 1; y < cols - 1; y++) {
          if (i !== x && j !== y) {
            // Calculate the temporary value based on the formula
            const temp = arr[i][j] * arr[x][y]
              + arr[i-1][j] * arr[x-1][y]
              + arr[i+1][j] * arr[x+1][y]
              + arr[i][j-1] * arr[x][y-1]
              + arr[i][j+1] * arr[x][y+1];

            if (temp > max) {
              max = temp;
            }
          }
        }
      }
    }
  }

  console.log(max);
});
