# Heap Sort in JavaScript

## Overview
Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements in an array. It has two main phases:
1. **Building a Max Heap**: Rearrange the array to satisfy the Max Heap property, where each parent node is greater than or equal to its child nodes.
2. **Extracting Elements**: Repeatedly swap the root (largest element) with the last element of the unsorted portion of the array and reduce the heap size. After each extraction, re-heapify to restore the Max Heap property.

---

## Features
- **Efficient**: Time complexity of \(O(n \log n)\).
- **In-place**: No additional memory is required for sorting.
- **Deterministic**: Produces the same result every time for the same input.

---

## How It Works
1. **Build a Max Heap**:
   - Start from the last non-leaf node and call the `heapify` function for each node in reverse level order.
   - This ensures that the largest element becomes the root of the heap.

2. **Extract Elements**:
   - Swap the root (largest element) with the last element of the array.
   - Reduce the heap size and call `heapify` to maintain the Max Heap property.
   - Repeat until all elements are sorted.

