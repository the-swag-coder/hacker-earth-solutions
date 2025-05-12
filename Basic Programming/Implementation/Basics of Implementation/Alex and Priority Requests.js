const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", line => {
  input.push(...line.trim().split(" ").map(Number));
});

rl.on("close", () => {
  const q = input[0];
  let idx = 1;

  const timeToPriority = new Map();
  const priCount = new Map();

  const minHeap = [];
  const maxHeap = [];

  let maxTime = -1;

  function cleanHeap(heap, isMax = false) {
    while (heap.length > 0) {
      const val = isMax ? -heap[0] : heap[0];
      if (priCount.has(val) && priCount.get(val) > 0) break;
      heapShift(heap);
    }
  }

  function heapPush(heap, val) {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[i] >= heap[parent]) break;
      [heap[i], heap[parent]] = [heap[parent], heap[i]];
      i = parent;
    }
  }

  function heapShift(heap) {
    if (heap.length <= 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
      if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
    return top;
  }

  for (let i = 0; i < q; i++) {
    const type = input[idx++];

    if (type === 1) {
      const t = input[idx++];
      const p = input[idx++];

      // Delete old if exists
      if (timeToPriority.has(t)) {
        const old = timeToPriority.get(t);
        priCount.set(old, priCount.get(old) - 1);
      }

      timeToPriority.set(t, p);
      priCount.set(p, (priCount.get(p) || 0) + 1);
      heapPush(minHeap, p);
      heapPush(maxHeap, -p);
      maxTime = Math.max(maxTime, t);

    } else if (type === 2) {
      const t = input[idx++];
      if (timeToPriority.has(t)) {
        const p = timeToPriority.get(t);
        timeToPriority.delete(t);
        priCount.set(p, priCount.get(p) - 1);
        if (t === maxTime) {
          maxTime = timeToPriority.size > 0 ? Math.max(...timeToPriority.keys()) : -1;
        }
      }

    } else if (type === 3) {
      cleanHeap(minHeap);
      cleanHeap(maxHeap, true);
      if (minHeap.length === 0) {
        console.log("0 0");
      } else {
        console.log(`${minHeap[0]} ${-maxHeap[0]}`);
      }

    } else if (type === 4) {
      if (maxTime === -1) {
        console.log("0");
      } else {
        console.log(timeToPriority.get(maxTime));
      }
    }
  }
});
