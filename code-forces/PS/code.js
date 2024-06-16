"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  // Example logic
  const inputArray = readline().split(" ");

  let yearCount = 0;
  let limakWeight = +inputArray[0];
  let BobWeight = +inputArray[1];

  while (limakWeight <= BobWeight) {
    limakWeight = limakWeight * 3;
    BobWeight = BobWeight * 2;
    yearCount++;
  }

  console.log(yearCount);
}
