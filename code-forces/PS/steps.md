### Local Setup

You don’t need to do this step to get started. You can directly run code on the website (see step 3 above). Do the following setup to run code locally only after successfully solving 10 problems:

- JavaScript
    1. Download a version >= 15.8.0 from https://nodejs.org/en/download
    2. Create a file code.js where you will write your solution.
    3. Create a file input.txt where you can paste the sample input.
    4. Now run this command `cat input.txt | node code.js > output.txt`
        1. If you’re using Windows, type node.exe instead of node. `cat input.txt | node.exe code.js > output.txt`
    5. It will create a new file output.txt which you can match with the sample output given in the question.
    
    
    ❗ While submitting on CodeForces, select the language as Node.js 15.8.0
    
    Here’s an example:

    'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
				return string.trim();
    });

    main();
});

function readline() {
	  return inputString[currentLine++];
}

function main() {
// write your logic here
		const line1 = readline();

    console.log(line1);
}


/// 1. write the code in where write your logic is there
/// 2. paste the input in input.txt
/// 3. Now go to terminal where code.js and input.txt file is located through terminal
/// 4. type input.txt | node.exe code.js > output.txt> 
/// 5. check output.txt 
