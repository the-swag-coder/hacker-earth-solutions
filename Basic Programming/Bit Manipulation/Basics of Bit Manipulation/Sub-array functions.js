const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on("line", line => {
    input.push(...line.trim().split(/\s+/));
});

rl.on("close", () => {
    let idx = 0;
    const t = parseInt(input[idx++]);

    for (let _ = 0; _ < t; _++) {
        const n = parseInt(input[idx++]);
        const m = parseInt(input[idx++]);
        const p = parseInt(input[idx++]);
        const a = [];

        for (let i = 0; i < n; i++) {
            a.push(parseInt(input[idx++]));
        }

        let l = -1, r = -1, res = 0;

        for (let i = 0; i < n; i++) {
            let maxHeap = [a[i]];
            let minHeap = [a[i]];
            let func1 = a[i], func2 = a[i];

            const ilimit = Math.min(p, m) - 1;
            if (ilimit + i > n) break;

            let maxFunc3 = Number.MIN_SAFE_INTEGER;
            let maxJ = -1;

            for (let j = i + 1; j < n; j++) {
                // Maintain maxHeap for m elements
                if (maxHeap.length < m) {
                    maxHeap.push(a[j]);
                    maxHeap.sort((x, y) => y - x);
                    func1 ^= a[j];
                } else if (maxHeap[0] > a[j]) {
                    func1 ^= maxHeap[0];
                    func1 ^= a[j];
                    maxHeap[0] = a[j];
                    maxHeap.sort((x, y) => y - x);
                }

                // Maintain minHeap for p elements
                if (minHeap.length < p) {
                    minHeap.push(a[j]);
                    minHeap.sort((x, y) => x - y);
                    func2 ^= a[j];
                } else if (minHeap[0] < a[j]) {
                    func2 ^= minHeap[0];
                    func2 ^= a[j];
                    minHeap[0] = a[j];
                    minHeap.sort((x, y) => x - y);
                }

                if (minHeap.length === p && maxHeap.length === m) {
                    const func3 = func1 & func2;
                    if (maxFunc3 <= func3) {
                        maxFunc3 = func3;
                        maxJ = j;
                    }
                }
            }

            if (res < maxFunc3 || (res === maxFunc3 && (r - l) < (maxJ - i))) {
                l = i + 1;
                r = maxJ + 1;
                res = maxFunc3;
            }
        }

        console.log(`${l} ${r} ${res}`);
    }
});
