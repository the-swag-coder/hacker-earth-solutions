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
    const t = parseInt(input[idx++]);

    for (let tc = 0; tc < t; tc++) {
        const n = parseInt(input[idx++]);
        const nums = input[idx++].split(" ").map(Number);

        let ans = 0;
        let len = 0;

        for (let i = 0; i < n; i++) {
            const x = nums[i];
            if (x % 2 === 1) {
                len++;
            } else {
                ans += len + (len % 2) * 3;
                len = 0;
            }
        }

        ans += len + (len % 2) * 3;
        console.log(Math.floor(ans / 2));
    }
});
