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
    const t = parseInt(input[0]);
    let idx = 1;

    const countSetBits = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    for (let test = 0; test < t; test++) {
        const [n, k] = input[idx++].split(" ").map(Number);
        const arr = input[idx++].split(" ").map(Number);

        const bitCounts = arr.map(countSetBits);
        bitCounts.sort((a, b) => b - a);

        const sum = bitCounts.slice(0, k).reduce((acc, val) => acc + val, 0);
        console.log(sum);
    }
});
