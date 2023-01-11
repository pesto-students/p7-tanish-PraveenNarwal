const sortZero = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  let temp;
  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        temp = nums[low];
        nums[low] = nums[mid];
        nums[mid] = temp;
        mid++;
        low++;

        break;

      case 1:
        mid++;
        break;

      case 2:
        temp = nums[high];
        nums[high] = nums[mid];
        nums[mid] = temp;
        high--;

        break;
    }
  }
  return nums;
};

const arr = [0, 1, 0, 2, 1, 2, 0, 0];
console.log(sortZero(arr));
