const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(...line.trim().split(/\s+/));
});

rl.on("close", () => {
    let idx = 0;
    const t = parseInt(input[idx++], 10);

    for (let i = 0; i < t; i++) {
        let n = BigInt(input[idx++]);
        let ans = 0n;

        while (n > 0n) {
            n &= (n - 1n);
            ans += 1n;
        }

        console.log((1n << ans).toString());
    }
});
