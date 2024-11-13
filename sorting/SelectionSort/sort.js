let arr = [3, 4, 23, 2, 1];

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  //   console.log(minIndex,"minIndex")
  //   const [element] = arr.splice(minIndex, 1);
  //   console.log(element,"elementelement")
  //   arr[i]=element
  //   console.log(arr, "array");
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

console.log(arr, "array");
