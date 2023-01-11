function sumContArray(nums) {
    let Max = curMax = nums[0];
       for (let i = 1; i < nums.length; i++) {
           curMax = Math.max(nums[i], curMax + nums[i]);
           Max = Math.max(curMax, Max);
       }
       return Max;
   }
   
   const arr = [1,2,3,4,5,-10];
   console.log(sumContArray(arr));

   // SC = o(C);
   // TC = o(n);