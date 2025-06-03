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
    const T = parseInt(input[currentLine++]);

    for (let test = 0; test < T; test++) {
        const s = input[currentLine++];
        const n = parseInt(input[currentLine++]);

        for (let query = 0; query < n; query++) {
            const t = input[currentLine++];

            const a = new Array(130).fill(0);
            const b = new Array(130).fill(0);

            for (let i = 0; i < t.length; i++) {
                a[t.charCodeAt(i)]++;
            }

            let j = -1;
            let x = 0;
            let ans = 0;

            for (let i = 0; i < s.length; i++) {
                const charCode = s.charCodeAt(i);
                b[charCode]++;

                if (b[charCode] === a[charCode]) {
                    x++;
                }

                if (x === t.length) {
                    while (true) {
                        j++;
                        const leftCharCode = s.charCodeAt(j);
                        b[leftCharCode]--;
                        ans += s.length - i;

                        if (b[leftCharCode] < a[leftCharCode]) {
                            x--;
                            break;
                        }
                    }
                }
            }

            console.log(ans);
        }
    }
}