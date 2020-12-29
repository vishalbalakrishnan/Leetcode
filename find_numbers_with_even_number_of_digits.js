var findNumbers = function (nums) {
  let count = 0;
  nums.forEach(e => {
    if (e.toString()
      .length % 2 == 0) {
      count += 1;
    }
  })
  return count;
};