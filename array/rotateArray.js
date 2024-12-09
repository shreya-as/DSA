function rotateArray(arr) {
  let lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = lastElement;
  return arr;
}
const array = [2, 4, 2, 1, 5, 8];
console.log(rotateArray(array));
