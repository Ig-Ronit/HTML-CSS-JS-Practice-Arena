const factorial = function (n) {
  if (n == 0) return 1;
  let result = n * factorial2(n - 1);
  return result;
};

factorial;
