// Create a recursive function that sorts an array using the merge sort algorithm
function mergeSort(arr) {
  if (arr.length < 2) return arr.slice();

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);

  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let finalArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      finalArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      finalArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return finalArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

console.log(mergeSort([])); // Output: []
console.log(mergeSort([3, 17, 22, 95, 11])); // Output: [3, 11, 17, 22, 95]
console.log(mergeSort([38, 57, 2, 1, 3, 5, 60, 4, 0])); // Output: [0, 1, 2, 3, 4, 5, 38, 57, 60]
