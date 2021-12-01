const transpose = function(matrix) {
  let array = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let arr1 = [];
    for(let j = 0; j < matrix.length; j++){
      arr1.push(matrix[j][i]);
    }
    array.push(arr1);
  }
  return array;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));