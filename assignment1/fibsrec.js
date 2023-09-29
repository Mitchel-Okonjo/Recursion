// Create a recursive function that takes a number as input
// And returns an array of the fibonacci seuquence of as many number of elements
function fibsrec(num, arr = [], first = -2, second = -1) {
  if (arr.length === num) return arr;

  if (arr.length === 0) {
    arr.push(0);
  } else if (arr.length === 1) {
    arr.push(1);
  } else {
    arr.push(arr[first] + arr[second]);
  }
  return fibsrec(num, arr, first + 1, second + 1);
}

console.log(fibsrec(0)); // Outupt: []
console.log(fibsrec(1)); // Output: [0, 1]
console.log(fibsrec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
