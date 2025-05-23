function solve(N, K, A) {
  // Helper function to count number of set bits (popcount equivalent)
  function popcount(n) {
    let count = 0;
    while (n) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }

  // Don't do any swap - use original K and A
  // Create a map to group elements by their Hamming distance from K
  let groups = new Map();

  for (let i = 0; i < A.length; i++) {
    let hammingDistance = popcount(A[i] ^ K);
    if (!groups.has(hammingDistance)) {
      groups.set(hammingDistance, []);
    }
    groups.get(hammingDistance).push(A[i]);
  }

  // Sort groups by Hamming distance and sort elements within each group
  let result = [];
  let sortedKeys = Array.from(groups.keys()).sort((a, b) => a - b);

  for (let key of sortedKeys) {
    let group = groups.get(key);
    group.sort((a, b) => a - b);
    result.push(...group);
  }

  return result;
}