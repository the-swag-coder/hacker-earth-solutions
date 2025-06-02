const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", (line) => {
    input.push(line.trim());
}).on("close", () => {
    const MAX_BITS = 30;
    const MAX_N = 100014;
    const cnt = Array.from({ length: MAX_N }, () => Array(MAX_BITS).fill(0));

    let idx = 0;
    const n = parseInt(input[idx++]);

    const arr = input[idx++].split(" ").map(Number);
    for (let i = 0; i < n; i++) {
        const x = arr[i];
        for (let j = 0; j < MAX_BITS; j++) {
            const prev = cnt[i][j];
            const mask = (1 << (j + 1)) - 1;
            const value = Math.max(0, (1 << j) - (x & mask));
            cnt[i + 1][j] = prev + value;
        }
    }

    const q = parseInt(input[idx++]);
    for (let qi = 0; qi < q; qi++) {
        const [l, r] = input[idx++].split(" ").map(Number);
        const l0 = l - 1;
        let ans = Infinity;

        for (let j = 0; j < MAX_BITS; j++) {
            const diff = cnt[r][j] - cnt[l0][j];
            if (diff < ans) {
                ans = diff;
            }
        }
        console.log(ans);
    }
});
