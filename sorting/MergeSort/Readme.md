# Merge Sort Algorithm

## Introduction
**Merge Sort** is a classic divide-and-conquer sorting algorithm. It divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves into a single sorted array. This algorithm is known for its efficiency and stability, making it a popular choice for sorting large datasets.

## How Merge Sort Works
1. **Divide**: Split the array into two halves.
2. **Conquer**: Recursively sort each half.
3. **Merge**: Combine the two sorted halves into a single sorted array.

### Example
Given an array: `[38, 27, 43, 3, 9, 82, 10]`

1. Split into `[38, 27, 43]` and `[3, 9, 82, 10]`
2. Further split into `[38]`, `[27, 43]`, `[3, 9]`, `[82, 10]`
3. After sorting and merging:
   - `[27, 38, 43]`
   - `[3, 9, 10, 82]`
4. Final merge results in: `[3, 9, 10, 27, 38, 43, 82]`

## Features
- **Stable**: Maintains the relative order of equal elements.
- **Efficient**: Guarantees a time complexity of \(O(n \log n)\).
- **Suitable for Large Datasets**: Performs well with large arrays due to its predictable performance.
