var duplicateZeros = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
};