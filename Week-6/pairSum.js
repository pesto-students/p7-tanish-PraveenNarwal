function pair(arr, diff) {
  let a = [];
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let max = Math.max(arr[j], arr[i]);
      let min = Math.min(arr[j], arr[i]);

      if (max - min === diff) {
        a.push(max, min);
      }
    }
  }
  return a;
}

console.log(pair([5, 10, 3, 2, 50, 80], 78));
