const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let idx = 0;
  const t = parseInt(input[idx++]);

  for (let test = 0; test < t; test++) {
    const [length, no_of_queries] = input[idx++].split(" ").map(Number);
    const house = " " + input[idx++]; // Add dummy character for 1-based indexing

    const no_of_changes_till = Array(length + 1).fill(0);

    for (let i = 2; i <= length; i++) {
      no_of_changes_till[i] = no_of_changes_till[i - 1] + (house[i] !== house[i - 1] ? 1 : 0);
    }

    for (let q = 0; q < no_of_queries; q++) {
      let [left, right] = input[idx++].split(" ").map(Number);
      if (left > right) [left, right] = [right, left];

      const clockwise = no_of_changes_till[right] - no_of_changes_till[left];
      const anticlockwise =
        (no_of_changes_till[length] - no_of_changes_till[right]) +
        (no_of_changes_till[left] - no_of_changes_till[1]) +
        (house[1] !== house[length] ? 1 : 0);

      const answer = Math.min(clockwise, anticlockwise);
      console.log(answer);
    }
  }
});
