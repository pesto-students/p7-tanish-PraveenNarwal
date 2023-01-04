function print(arr, ir, jc, row, col, a) {
  if (ir >= row || jc >= col) return;

  for (let i = jc; i < col; i++) {
    a.push(arr[ir][i]);
  }
  for (let i = ir + 1; i < row; i++) {
    a.push(arr[i][col - 1]);
  }

  if (row - 1 != ir) {
    for (let i = col - 2; i >= jc; i--) {
      a.push(arr[row - 1][i]);
    }
  }

  if (col - 1 != jc) {
    for (let i = row - 2; i > ir; i--) {
      a.push(arr[i][jc]);
    }
  }
  print(arr, ir + 1, jc + 1, row - 1, col - 1, a);
  return a;
}

let arr = [
  [1, 2, 3, 22],
  [4, 5, 16, 21],
  [7, 8, 9, 23],
  [33, 55, 77, 78],
];
let row = arr.length;
let col = arr[0].length;
let finalArray = [];
console.log(print(arr, 0, 0, row, col, finalArray));

// [1,  2,  3, 22, 21, 23, 78, 77, 55, 33,  7,  4, 5, 16,  9, 8]
