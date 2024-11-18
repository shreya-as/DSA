# Quicksort Algorithm 📊

## Introduction
**Quicksort** is a highly efficient, comparison-based sorting algorithm that follows the divide-and-conquer paradigm. It is renowned for its fast average-case performance of **O(n log n)**, making it a preferred choice for sorting large datasets. However, its performance can degrade to **O(n²)** in the worst case if a poor pivot selection strategy is used.

## How Quicksort Works
1. **Choose a Pivot 🎯**: Select an element from the array to be the pivot (commonly the first, last, or a random element).
2. **Partition** 🔄: Rearrange the array such that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right. Place the pivot in its correct sorted position.
3. **Recursively Sort** 🔁: Apply the same steps to the sub-arrays on the left and right of the pivot.

### Example
Given an array: `[8, 3, 1, 7, 0, 10, 2]`

1. **Choose a Pivot** (e.g., `2`)
2. **Partition** into `[0, 1] pivot [8, 3, 7, 10]`
3. Recursively sort the left and right sub-arrays:
   - Left sub-array: `[0, 1]`
   - Right sub-array: `[3, 7, 8, 10]`
4. Final sorted array: `[0, 1, 2, 3, 7, 8, 10]`

---

## Features
- **In-Place**: Uses minimal extra memory by sorting in place.
- **Efficient for Large Datasets**: Average-case time complexity of **O(n log n)**.
- **Not Stable**: Does not preserve the relative order of equal elements.

## Time Complexity ⏱
| Case            | Time Complexity |
|-----------------|-----------------|
| **Best Case**   | O(n log n)      |
| **Average Case**| O(n log n)      |
| **Worst Case**  | O(n²)           |

### Space Complexity
- **O(log n)** due to the recursive call stack (in-place sorting).

---

## Optimizations to Avoid O(n²) Worst-Case 💡
1. **Randomized Pivot Selection**:
   - Choosing a random pivot reduces the risk of encountering the worst-case scenario.
  
2. **Median-of-Three Pivot**:
   - Use the median of the first, middle, and last elements as the pivot.

3. **Hybrid Approach**:
   - Switch to a simpler sorting algorithm (like **Insertion Sort**) for smaller sub-arrays.

These optimizations help improve the efficiency of Quicksort and make it more robust against worst-case scenarios, especially for nearly sorted or repetitive data.
