const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
rl.on("line", line => input.push(line.trim()));
rl.on("close", () => {
    let index = 0;
    const t = parseInt(input[index++]);

    const setBits = (n) => {
        let count = 0;
        while (n > 0) {
            count++;
            n = n & (n - 1);
        }
        return count;
    };

    for (let test = 0; test < t; test++) {
        const n = parseInt(input[index++]);
        const arr = input[index++].split(" ").map(Number);

        const v = arr.map((val, i) => [setBits(val), i]);

        v.sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });

        const result = v.map(([_, i]) => arr[i]);
        console.log(result.join(" "));
    }
});
