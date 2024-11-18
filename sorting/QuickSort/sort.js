function quicksort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
  
    // Step 1: Choose a pivot (we'll use the last element for simplicity)
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    // Step 2: Partition the array into two halves
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]); // Elements less than pivot go to the left
      } else {
        right.push(arr[i]); // Elements greater than or equal to pivot go to the right
      }
    }
  
    // Step 3: Recursively apply quicksort to the left and right partitions
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  const unsortedArray = [8, 3, 5, 1, 9, 6, 4];
  const sortedArray = quicksort(unsortedArray);
  console.log(sortedArray); // Output: [1, 3, 4, 5, 6, 8, 9]
  