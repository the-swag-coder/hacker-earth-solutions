const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(line.trim());
});

rl.on("close", () => {
    const [n, q] = input[0].split(" ").map(Number);
    const numbers = input[1].split(" ").map(Number);

    const mp = Array.from({ length: 32 }, () => []);

    for (let i = 0; i < n; i++) {
        let x = numbers[i];
        for (let j = 0; j < 32; j++) {
            if (x % 2 === 1) {
                mp[j].push(i + 1);
            }
            x = Math.floor(x / 2);
        }
    }

    for (let i = 0; i < q; i++) {
        const [l, r, valInit] = input[i + 2].split(" ").map(Number);
        let val = valInit;
        for (let j = 0; j < 32; j++) {
            if (val % 2 === 0) {
                // Erase values in mp[j] between l and r inclusive
                mp[j] = mp[j].filter(idx => idx < l || idx > r);
            }
            val = Math.floor(val / 2);
        }
    }

    const ans = Array(n + 1).fill(0);
    for (let i = 0; i < 32; i++) {
        for (const idx of mp[i]) {
            ans[idx] += (1 << i);
        }
    }

    console.log(ans.slice(1).join(" "));
});
