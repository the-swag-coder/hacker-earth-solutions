const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
    let t = parseInt(input[0]);
    let index = 1;

    function f(i, v, a, sum, memo) {
        const key = `${i}_${a}`;
        if (memo.has(key)) return memo.get(key);

        if (i === -1) {
            const diff = sum - a;
            const result = Math.abs(diff * diff - a * a);
            memo.set(key, result);
            return result;
        }

        const include = f(i - 1, v, a + v[i], sum, memo);
        const exclude = f(i - 1, v, a, sum, memo);
        const result = Math.min(include, exclude);

        memo.set(key, result);
        return result;
    }

    for (let ti = 0; ti < t; ti++) {
        const n = parseInt(input[index++]);
        const v = input[index++].split(" ").map(Number);
        const sum = v.reduce((acc, val) => acc + val, 0);
        const memo = new Map();
        const ans = f(n - 1, v, 0, sum, memo);
        console.log(ans);
    }
});
