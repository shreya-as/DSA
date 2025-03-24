const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // Step 1: Select the current element
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift larger elements to the right
      j--;
    }

    // Place the current element in its correct position
    arr[j + 1] = current;
  }

  return arr;
};

// Example:
const array = [5, 11, 9, 1, 5, 6];
console.log(insertionSort(array)); // Output: [1, 5, 5, 6, 9, 11]

//    1
//   121
//  12321
// 1234321

const printPyramid = (num) => {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += " ".repeat(num - i - 1);
    for (let j = 0; j <= i; j++) {
      str += j + 1;
    }
  }
  console.log(str, "string string");
};
