const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  // step-1  // Step 1: Create and sort the list of projects by capital required
  const projects = [];
  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }
  projects.sort((a, b) => a[0] - b[0]);

  // Step 2: Use a max-heap to track the most profitable projects we can do
  let maxHeap = new MaxPriorityQueue({ priority: (x) => x });
  let i = 0;

  while (k > 0) {
    while (i < projects.length && projects[i][0] <= w) {
      maxHeap.enqueue(projects[i][1]);
      i++;
    }

    // If there are no projects we can start, break the loop
    if (maxHeap.isEmpty()) break;

    //Choose the most profitable project
    w += maxHeap.dequeue().element;
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
