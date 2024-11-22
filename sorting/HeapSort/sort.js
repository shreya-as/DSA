function heapSort(arr) {
    let n = arr.length;
  
    // Step 1: Build a Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Step 2: Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
      // Swap the first (largest) element with the last one
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Function to "heapify" a subtree rooted at index `i`
  function heapify(arr, n, i) {
    let largest = i; // Start with the root as the largest
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child
  
    // If the left child is larger
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // If the right child is larger
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // If the largest is not the root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
  
      // Recursively heapify the affected subtree
      heapify(arr, n, largest);
    }
  }
  
  // Example usage:
  let numbers = [4, 10, 3, 5, 1];
  console.log("Original Array:", numbers);
  console.log("Sorted Array:", heapSort(numbers));
  