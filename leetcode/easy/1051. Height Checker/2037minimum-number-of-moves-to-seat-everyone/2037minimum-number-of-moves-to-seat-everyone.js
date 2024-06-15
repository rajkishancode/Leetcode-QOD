/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

let seats = [3, 1, 5];
let students = [2, 7, 4];
var minMovesToSeat = function (seats, students) {
  // Sort the seats and students arrays
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let totalMoves = 0;

  // Calculate the sum of absolute differences
  for (let i = 0; i < seats.length; i++) {
    totalMoves += Math.abs(seats[i] - students[i]);
  }

  return totalMoves;
};
minMovesToSeat(seats, students);
