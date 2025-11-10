// second largest element from an array

function secondLargest(arr) {
  return [...new Set(arr)].sort((a, b) => a - b)[1];
}

console.log(secondLargest([3, 5, 6, 6, 2])); //3
