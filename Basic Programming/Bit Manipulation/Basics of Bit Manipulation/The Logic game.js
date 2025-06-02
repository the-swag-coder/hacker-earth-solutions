const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        const n = parseInt(input[i]);

        if ((n & (n - 1)) === 0) {
            console.log(n);
        } else {
            const a = Math.floor(Math.log2(n));
            const b = 1 << a;
            const c = n ^ b;
            const ans = 2 * c;
            console.log(ans);
        }
    }
});
