var removeDuplicates = function (nums) {
  let flag = 1;
  while (flag == 1) {
    flag = 0;
    nums.forEach((item, i) => {
      if (nums.indexOf(item) != i) {
        flag = 1;
        nums.splice(i, 1);
      }
    });
  }
};

/**********************************/

// var removeDuplicates = function (nums) {
//   let count = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[count] = nums[i]
//       count += 1;
//     }
//   }
//   nums.splice(count);
// };