function solve(N, A) {
  // Simple approach with careful integer division
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    sum += A[i];

    if (A[i] < 0) {
      // C++ integer division behavior using Math.floor for negative numbers
      const absValue = Math.abs(A[i]);
      const halfValue = Math.floor(absValue / 2);
      cnt += halfValue;
    } else {
      cnt -= A[i];
    }
  }

  return cnt >= 0 ? -sum : -1;
}