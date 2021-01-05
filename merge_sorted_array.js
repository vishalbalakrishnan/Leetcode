var merge = function (nums1, m, nums2, n) {
  let j = 0
  for (var i = m; i < m + n; i++) {
    nums1.splice(i, 1, nums2[j])
    j++;
  }
  nums1.sort((a, b) => {
    return a - b
  })
};