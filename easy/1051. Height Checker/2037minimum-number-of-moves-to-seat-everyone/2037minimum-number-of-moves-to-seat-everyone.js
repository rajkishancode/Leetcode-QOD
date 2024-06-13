/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

let seats = [3, 1, 5];
let students = [2, 7, 4];
var minMovesToSeat = function (seats, students) {
  let count = 0;
  const uniqueSeat = new Set(seats);
  //   seats.sort((a, b) => a - b);
  console.log(seats);

  // for(let i = 0; i < students.length;i++){
  //     if(students[i] === seats[i]) count+=0
  //     else
  // }
};
minMovesToSeat(seats, students);
