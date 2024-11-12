arr = [10, 23, 1, 34, 2];
let temp;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) { // When we reach the last index, there are no more elements to compare

    if (arr[j] > arr[j + 1]) {
      //   temp = arr[j + 1];
      //   arr[j + 1] = arr[j];
      //   arr[j] = temp;
      // Use destructuring for swapping elements
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr, "arrarr");
