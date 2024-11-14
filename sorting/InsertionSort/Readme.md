# 📜 Insertion Sort 

A simple and efficient implementation of the **Insertion Sort** algorithm. This algorithm is a great choice for sorting small or nearly sorted arrays. 🚀


## 📖 Introduction
**Insertion Sort** is a simple, intuitive sorting algorithm that builds the final sorted array one element at a time. It’s similar to the way you would sort playing cards in your hands: by picking one card at a time and placing it in the correct position relative to the cards already in hand.

## 💡 How It Works
1. Start with the second element (index 1), assuming the first element (index 0) is already sorted.
2. Compare the current element with the elements before it.
3. If the element before is greater, shift the larger element one position to the right.
4. Repeat the shifting process until you find the correct position for the current element.
5. Insert the current element into its correct position.
6. Continue this process until the entire array is sorted.

### 📊 Algorithm Steps
- For each element in the array (starting from the second element):
  - Store the current element in a variable called `current`.
  - Compare `current` with the previous elements.
  - Shift all larger elements to the right.
  - Insert `current` in the correct position.
  
