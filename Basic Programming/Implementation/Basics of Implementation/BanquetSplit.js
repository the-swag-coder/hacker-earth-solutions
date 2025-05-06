const readline = require('readline');

// Initialize the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Global variables similar to C++ code
const g = Array(1000000).fill().map(() => []);
let n, H = Array(1000000).fill(0);
let up = Array(1000000).fill().map(() => Array(21).fill(0));
let tin = Array(1000000).fill(0);
let tout = Array(1000000).fill(0);
let timer = 0, l = 0;

// DFS function to compute tin, tout, up array and heights
function dfs(node, p = 0, h = 0) {
  tin[node] = ++timer;
  up[node][0] = p;
  H[node] = h++;

  for (let i = 1; i <= l; ++i) {
    up[node][i] = up[up[node][i - 1]][i - 1];
  }

  for (const c of g[node]) {
    if (c !== p) {
      dfs(c, node, h);
    }
  }

  tout[node] = ++timer;
}

// Check if a is an ancestor of b
function upper(a, b) {
  return tin[a] <= tin[b] && tout[a] >= tout[b];
}

// Find lowest common ancestor of a and b
function lca(a, b) {
  for (let i = l; i >= 0; --i) {
    if (!upper(up[a][i], b)) {
      a = up[a][i];
    }
  }
  return up[a][0];
}

// Process input and solve the problem
let lines = [];
let currentLine = 0;

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  // Parse number of test cases
  const t = parseInt(lines[currentLine++]);

  // Process each test case
  for (let tc = 0; tc < t; tc++) {
    // Read number of nodes
    n = parseInt(lines[currentLine++]);

    // Clear the graph for this test case
    for (let i = 0; i < n; ++i) {
      g[i] = [];
    }

    // Read edges
    for (let i = 0; i < n - 1; ++i) {
      const [u, v] = lines[currentLine++].split(' ').map(x => parseInt(x) - 1);
      g[u].push(v);
      g[v].push(u);
    }

    // Reset timer and compute l (log2(n))
    timer = 0;
    l = 1;
    while ((1 << l) <= n) {
      ++l;
    }

    // Run DFS from node 0
    dfs(0);

    // Read number of queries
    const q = parseInt(lines[currentLine++]);

    // Process each query
    for (let i = 0; i < q; ++i) {
      const [u, v] = lines[currentLine++].split(' ').map(x => parseInt(x) - 1);

      // Check if heights have different parity
      if ((H[u] & 1) !== (H[v] & 1)) {
        process.stdout.write("Yes\n");
      } else {
        process.stdout.write("No\n");
        process.stdout.write("1 ");

        let nodeU = u;
        let nodeV = v;

        // Ensure nodeU is the node with smaller height
        if (H[nodeU] > H[nodeV]) {
          [nodeU, nodeV] = [nodeV, nodeU];
        }

        // Check if one node is ancestor of the other
        if (upper(nodeU, nodeV)) {
          process.stdout.write(`${H[nodeV] - H[nodeU] + 1}\n`);
        } else {
          // Calculate distance using LCA
          const h = H[lca(nodeU, nodeV)] * 2;
          process.stdout.write(`${H[nodeU] + H[nodeV] - h + 1}\n`);
        }
      }
    }
  }
});