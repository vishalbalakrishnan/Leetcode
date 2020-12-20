var singleNumber = function (nums) {
  return nums
    .find((e) => nums.indexOf(e) === nums.lastIndexOf(e))
};