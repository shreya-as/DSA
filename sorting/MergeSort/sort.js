
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: if there's 1 or no elements, it's already sorted
  
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
  
    console.log({ left, right }, "leftright");
  
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
  
    console.log(sortedLeft, "sortedleftleft");
    console.log(sortedRight, "sortedRigth");
  
    // Merge the two sorted halves and return the result
    return merge(sortedLeft, sortedRight);
  }
  
function merge(left, right) {
    console.log({ left, right }, "in test things");
    const result = [];
    let i = 0,
      j = 0; // Initialize both i and j to 0
  
    // Merge the two arrays while keeping them sorted
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Use correct slice for left and right
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  

let arr = [3, 14, 5, 2];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [2, 3, 5, 14]
