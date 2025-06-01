const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(line.trim());
}).on("close", () => {
    let idx = 0;
    let t = parseInt(input[idx++]);

    while (t--) {
        const [n, c01, c10] = input[idx++].split(" ").map(BigInt);
        const arr = input[idx++].split(" ").map(BigInt);

        const freq = [
            [0n, 0n],
            [0n, 0n]
        ];

        for (let i = 0; i < Number(n); i++) {
            const x = arr[i];
            const parity = i % 2;
            freq[parity][Number(x)]++;
        }

        const c1 = freq[0][0] * c01 + freq[1][1] * c10;
        const c2 = freq[0][1] * c10 + freq[1][0] * c01;

        console.log(c1 < c2 ? c1.toString() : c2.toString());
    }
});
