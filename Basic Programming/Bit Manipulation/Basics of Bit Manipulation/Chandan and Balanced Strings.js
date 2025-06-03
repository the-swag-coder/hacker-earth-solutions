const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let currentLine = 0;

rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {
    solve();
});

function solve() {
    const t = parseInt(input[currentLine++]);

    for (let test = 0; test < t; test++) {
        const s = input[currentLine++];
        const n = s.length;

        const m = new Map();

        const dp = new Array(n + 1);
        dp[0] = 0;

        let ans = 0;

        for (let i = 1; i <= n; i++) {
            dp[i] = dp[i - 1] ^ (1 << (s.charCodeAt(i - 1) - 97));
        }

        m.set(dp[0], (m.get(dp[0]) || 0) + 1);

        for (let i = 1; i <= n; i++) {
            ans += m.get(dp[i]) || 0;
            m.set(dp[i], (m.get(dp[i]) || 0) + 1);
        }

        console.log(ans);
    }
}