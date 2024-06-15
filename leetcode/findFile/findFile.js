const root = {
  folder1: {
    file1: "file1",
    folder2: {
      file2: "file2",
      folder3: {
        file3: "file3",
        folder4: {
          file4: "file4",
        },
      },
    },
    folder5: {
      file5: "file5",
      folder6: {
        file6: "file6",
      },
    },
  },
};

function findFile(root, fileName) {
  if (typeof root !== "object" || root === null) {
    return false;
  }

  if (root[fileName] === fileName) {
    console.log("file found!");
    return true;
  }

  for (let key in root) {
    //hasOwnProperty returns boolean.
    if (typeof root[key] === "object" && root[key] !== null) {
      if (findFile(root[key], fileName)) {
        return true;
      }
    }
  }
  return false;
}

console.log(findFile(root, "file61"));
/*
1.check type of root === 'object' || root === null
2. direct check if fileName is in first level of root - root[fileName] === fileName
3. loop over key of root 
4. check type of root key is object and value of that key is not null
5. initiate a if check
6. inside call the function recursively with current key and fileName which return boolean
7. If Found return true else go out of the loop and at end return false; 
*/
