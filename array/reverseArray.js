// using two pointer method
function reverseArray(arr) {
  // two pointer if.e start and end
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
