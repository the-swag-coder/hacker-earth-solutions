const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const s = line.trim();
  const parts = s.split(".");

  if (parts.length === 4 && parts.every(part => {
    // Check if part is a number and in 0-255 range, no leading spaces or empty
    const num = Number(part);
    return /^\d+$/.test(part) && num >= 0 && num < 256;
  })) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  rl.close();
});
