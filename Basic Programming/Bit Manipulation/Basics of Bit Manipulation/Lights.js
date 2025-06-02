const readline = require("readline");

const N = 100000;
const M = 10001;

class Bitset {
    constructor(size = N) {
        this.size = size;
        this.bits = new Array(Math.ceil(size / 32)).fill(0);
    }

    set(pos) {
        const idx = Math.floor(pos / 32);
        const bit = pos % 32;
        this.bits[idx] |= (1 << bit);
    }

    reset(pos) {
        const idx = Math.floor(pos / 32);
        const bit = pos % 32;
        this.bits[idx] &= ~(1 << bit);
    }

    flip() {
        for (let i = 0; i < this.bits.length; i++) {
            this.bits[i] = ~this.bits[i];
        }
        // Clear bits beyond size
        const lastIdx = Math.floor((this.size - 1) / 32);
        const lastBits = this.size % 32;
        if (lastBits > 0) {
            const mask = (1 << lastBits) - 1;
            this.bits[lastIdx] &= mask;
        }
        return this;
    }

    get(pos) {
        const idx = Math.floor(pos / 32);
        const bit = pos % 32;
        return (this.bits[idx] >> bit) & 1;
    }

    xor(other) {
        const result = new Bitset(this.size);
        for (let i = 0; i < this.bits.length; i++) {
            result.bits[i] = this.bits[i] ^ other.bits[i];
        }
        return result;
    }

    shiftLeft(pos) {
        if (pos === 0) return this;
        const result = new Bitset(this.size);
        const wordShift = Math.floor(pos / 32);
        const bitShift = pos % 32;

        for (let i = this.bits.length - 1; i >= wordShift; i--) {
            if (bitShift === 0) {
                result.bits[i] = this.bits[i - wordShift];
            } else {
                result.bits[i] = this.bits[i - wordShift] << bitShift;
                if (i - wordShift - 1 >= 0) {
                    result.bits[i] |= this.bits[i - wordShift - 1] >>> (32 - bitShift);
                }
            }
        }

        // Clear bits beyond size
        const lastIdx = Math.floor((this.size - 1) / 32);
        const lastBits = this.size % 32;
        if (lastBits > 0) {
            const mask = (1 << lastBits) - 1;
            result.bits[lastIdx] &= mask;
        }

        return result;
    }

    shiftRight(pos) {
        if (pos === 0) return this;
        const result = new Bitset(this.size);
        const wordShift = Math.floor(pos / 32);
        const bitShift = pos % 32;

        for (let i = 0; i < this.bits.length - wordShift; i++) {
            if (bitShift === 0) {
                result.bits[i] = this.bits[i + wordShift];
            } else {
                result.bits[i] = this.bits[i + wordShift] >>> bitShift;
                if (i + wordShift + 1 < this.bits.length) {
                    result.bits[i] |= this.bits[i + wordShift + 1] << (32 - bitShift);
                }
            }
        }

        return result;
    }

    findFirst() {
        for (let i = 0; i < this.bits.length; i++) {
            if (this.bits[i] !== 0) {
                for (let j = 0; j < 32; j++) {
                    if ((this.bits[i] >> j) & 1) {
                        const pos = i * 32 + j;
                        return pos < this.size ? pos : -1;
                    }
                }
            }
        }
        return -1;
    }

    count() {
        let cnt = 0;
        for (let i = 0; i < this.bits.length; i++) {
            let x = this.bits[i];
            while (x) {
                cnt += x & 1;
                x >>>= 1;
            }
        }
        return cnt;
    }

    copy() {
        const result = new Bitset(this.size);
        for (let i = 0; i < this.bits.length; i++) {
            result.bits[i] = this.bits[i];
        }
        return result;
    }

    clear() {
        this.bits.fill(0);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
let lineIndex = 0;

rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    solve();
});

function solve() {
    const t = parseInt(lines[lineIndex++]);

    for (let test = 0; test < t; test++) {
        const [n, m] = lines[lineIndex++].split(' ').map(Number);

        let cur = new Bitset(N);
        let pre = new Array(M);
        let mx = new Bitset(N);
        let id = 0;

        pre[0] = new Bitset(N);

        for (let i = 1; i <= m; i++) {
            const query = lines[lineIndex++].split(' ').map(Number);
            const l = query[0];

            if (l === 1) {
                const [, left, right] = query;
                const l1 = left - 1;
                const r1 = right - 1;

                let tp = new Bitset(N);
                tp.flip();
                tp = tp.shiftRight(N - (r1 - l1 + 1));
                tp = tp.shiftLeft(l1);

                cur = cur.xor(tp);

                let tp2 = cur.xor(mx);
                const firstPos = tp2.findFirst();
                if (firstPos >= 0 && firstPos < N && mx.get(firstPos) === 0) {
                    mx = cur.copy();
                    id = i;
                }

                pre[i] = pre[i-1].xor(cur);

            } else if (l === 2) {
                const [, a, b, left, right] = query;
                const l1 = left - 1;
                const r1 = right - 1;

                pre[i] = pre[i-1].xor(cur);

                let tp = pre[b].xor(pre[a-1]);
                tp = tp.shiftLeft(N - r1 - 1);
                tp = tp.shiftRight(N - (r1 - l1 + 1));

                const cnt = tp.count();
                if (cnt > 0) {
                    console.log(cnt + " " + (tp.findFirst() + l1 + 1));
                } else {
                    console.log(cnt + " " + 0);
                }

            } else {
                pre[i] = pre[i-1].xor(cur);
                console.log(id);
            }
        }
    }
}