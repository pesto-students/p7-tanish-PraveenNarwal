const threeSum = (nums, target) => {
  let closeSum = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        
        const sum = nums[i] + nums[j] + nums[k];
        
        if (Math.abs(sum - target) < Math.abs(closeSum - target)) {
          closeSum = sum;
        }
      }
    }
  }
  return closeSum;
};

console.log(threeSum([-1, 2, 1, -4], 1));
