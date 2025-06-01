const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    let idx = 0;
    let T = parseInt(input[idx++]);

    while (T--) {
        const n = parseInt(input[idx++]);
        const a = input[idx++].split(" ").map(Number);

        let xorSum = 0;
        let sum1 = 0, sum2 = 0;

        for (let i = 0; i < n; i++) {
            sum1 += a[i];
            xorSum ^= a[i];
        }

        if (xorSum === 0) {
            console.log("-1");
            break;
        }

        for (let i = 0; i < n; i++) {
            sum2 += (a[i] ^ xorSum);
        }

        if (sum1 === sum2) {
            console.log(xorSum);
        } else {
            console.log("-1");
        }
    }
});
