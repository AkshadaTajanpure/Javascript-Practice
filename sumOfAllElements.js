// sum of all array elements

function sumOfArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}
console.log(sumOfArray([1, 2, 3]));
