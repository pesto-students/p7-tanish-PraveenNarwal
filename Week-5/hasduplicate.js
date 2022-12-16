const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([2, 3, 3])); // true
console.log(hasDuplicate([2, 4, 3])); // false