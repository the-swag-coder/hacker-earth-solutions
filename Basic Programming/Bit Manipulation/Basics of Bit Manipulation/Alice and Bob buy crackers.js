const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const n = parseInt(input[0]);
    const cost = input[1].split(" ").map(Number);

    const checkSum = new Set();
    let counter = 0;

    for (let i = 1; i < (1 << n); i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                sum += cost[j];
            }
        }
        if (sum % 2 === 0 && !checkSum.has(sum)) {
            counter++;
        }
        checkSum.add(sum);
    }

    console.log(counter);
});
