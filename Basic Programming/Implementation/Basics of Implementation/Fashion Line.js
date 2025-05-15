process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let idx = 1;

  while (t--) {
    const [n, k, l, r] = lines[idx++].split(' ').map(Number);
    const str = lines[idx++];
    const special = lines[idx++];

    const check = new Array(257).fill(0);
    for (let i = 0; i < k; i++) {
      check[special.charCodeAt(i)] = 1;
    }

    const cnt = new Array(n + 1).fill(0);
    if (check[str.charCodeAt(0)]) cnt[1] = 1;
    for (let i = 2; i <= n; i++) {
      cnt[i] = cnt[i - 1];
      if (check[str.charCodeAt(i - 1)]) cnt[i]++;
    }

    let sol = 0, j = 1, K = 1;
    for (let i = 1; i <= n; i++) {
      if (j < i) j = i;
      if (K < i) K = i;
      while (j <= n && cnt[j] - cnt[i - 1] < l) j++;
      while (K <= n && cnt[K] - cnt[i - 1] <= r) K++;
      if (j <= n) sol += K - j;
    }

    console.log(sol);
  }
});
