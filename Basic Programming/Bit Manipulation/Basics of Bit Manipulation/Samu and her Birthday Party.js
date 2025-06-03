const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
    let idx = 0;
    const t = parseInt(input[idx++]);

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
        const arr = [];

        for (let i = 0; i < n; i++) {
            const binStr = input[idx++];
            arr.push(parseInt(binStr, 2));
        }

        arr.sort((a, b) => countSetBits(a) - countSetBits(b));

        let res = 11;

        for (let i = 1; i < (1 << k); i++) {
            let mask = i;
            let valid = true;
            for (const a of arr) {
                if ((mask & a) === 0) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                res = Math.min(res, countSetBits(mask));
            }
        }

        console.log(res);
    }
});
