const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
  const n = parseInt(input[0]);
  const w = new Array(n);
  const h = new Array(n);
  const temph = new Array(n);
  let widthsum = 0;

  // Read and store widths and heights
  for (let i = 0; i < n; i++) {
    const [wi, hi] = input[i + 1].split(' ').map(Number);
    w[i] = wi;
    h[i] = hi;
    temph[i] = hi;
    widthsum += wi;
  }

  // Sort a copy of heights
  const sortedHeights = [...temph].sort((a, b) => a - b);

  // Calculate and print areas
  const result = [];
  for (let i = 0; i < n; i++) {
    const currentWidthSum = widthsum - w[i];
    const maxHeight = h[i] !== sortedHeights[n - 1]
      ? sortedHeights[n - 1]
      : sortedHeights[n - 2];
    result.push(maxHeight * currentWidthSum);
  }

  console.log(result.join(' '));
});
