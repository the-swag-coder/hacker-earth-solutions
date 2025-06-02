const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(...line.trim().split(/\s+/));
}).on("close", () => {
    const t = parseInt(input[0]);
    const results = [];

    for (let i = 1; i <= t; i++) {
        let num = BigInt(input[i]);
        let count = 0n;
        let temp = num;

        while (temp > 0n) {
            count += temp & 1n;
            temp >>= 1n;
        }

        let maxbit = BigInt(num.toString(2).length - 1);
        let ans = 0n;

        while (count-- > 0n) {
            ans |= (1n << maxbit);
            maxbit--;
        }

        results.push(ans.toString());
    }

    console.log(results.join(" "));
});
