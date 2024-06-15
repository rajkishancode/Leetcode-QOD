/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const maxVal = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);
    return maxVal;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _heapifyDown(index) {
    const length = this.heap.length;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
        largest = rightChild;
      }
      if (largest === index) {
        break;
      }
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

var findMaximizedCapital = function (k, w, profits, capital) {
  let projects = [];
  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }
  projects.sort((a, b) => a[0] - b[0]);

  let maxHeap = new MaxHeap();
  let i = 0;

  while (k > 0) {
    while (i < projects.length && projects[i][0] <= w) {
      maxHeap.push(projects[i][1]);
      i++;
    }

    if (maxHeap.isEmpty()) break;

    w += maxHeap.pop();
    k--;
  }

  return w;
};

//input
let k = 2, // k is number of distinct project.
  w = 0, // current capital w
  profits = [1, 2, 3],
  capital = [0, 1, 1];
console.log(findMaximizedCapital(k, w, profits, capital));
