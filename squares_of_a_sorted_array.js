var sortedSquares = function (nums) {
  return nums.map(e => e * e)
    .sort((a, b) => {
      return a - b;
    })
};