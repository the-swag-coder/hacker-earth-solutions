const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const t = parseInt(input[0]);
    const c = 1000000007;

    for (let testCase = 1; testCase <= t; testCase++) {
        let n = BigInt(input[testCase]);
        let i = 1n;
        let b = 0;

        for (let j = n; j > 0n; j >>= 1n) {
            b++;
        }

        i <<= BigInt(b - 1);

        let ans = BigInt((b - 2)) * ((i - 1n) % BigInt(c)) % BigInt(c);

        let j = 1n;
        n -= i;

        while (j <= n) {
            ans += (i + j);
            ans %= BigInt(c);
            j <<= 1n;
        }

        console.log(ans.toString());
    }
});