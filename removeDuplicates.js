// remove duplicate elements from array

function removeDuplicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5])); //[1, 2, 3, 4, 5]
