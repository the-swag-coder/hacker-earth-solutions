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
        const a = input[idx++].split(" ").map(BigInt);

        let odd = 0n;
        for (let i = 0; i < n; i++) {
            if (a[i] % 2n !== 0n) {
                odd++;
            }
        }

        const even = BigInt(n) - odd;
        const ans = odd < even ? odd : even;
        console.log(ans.toString());
    }
});
