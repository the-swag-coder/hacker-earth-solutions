const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
    let index = 0;
    const t = parseInt(input[index++]);

    for (let test = 0; test < t; test++) {
        const [nStr, mStr] = input[index++].split(" ");
        const n = BigInt(nStr);
        const m = BigInt(mStr);
        let flag = false;
        let result = "";

        for (let i = 63; i >= 0; i--) {
            if ((m & (1n << BigInt(i))) !== 0n) {
                if (flag) {
                    result += ` + (${n}<<${i})`;
                } else {
                    result += `(${n}<<${i})`;
                    flag = true;
                }
            }
        }

        console.log(result);
    }
});
