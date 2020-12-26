var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let counter = 0;
  nums.forEach(e => {
    count = e == 1 ? count + 1 : 0;
    counter = count > counter ? count : counter;
  })
  return counter;
};