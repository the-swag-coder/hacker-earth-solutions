const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(line.trim());
}).on("close", () => {
    const T = parseInt(input[0]);
    const output = [];

    for (let i = 1; i <= T; i++) {
        let [N, m, c] = input[i].split(" ");
        N = parseInt(N);
        m = parseInt(m);

        if (c === "L") {
            // Left rotate
            const left = ((N << m) & 0xFFFF) | (N >>> (16 - m));
            output.push(left);
        } else {
            // Right rotate
            const right = (N >>> m) | ((N << (16 - m)) & 0xFFFF);
            output.push(right);
        }
    }

    console.log(output.join("\n"));
});
