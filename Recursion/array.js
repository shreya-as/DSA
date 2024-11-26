const multiply = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};
const arr = [1, 2, 3, 4];
console.log(multiply(arr));

// using recursion
const multiplyWithRecursion = (arr) => {
  if (arr.length === 0) {
    return 1;
  }
  console.log(arr, "arrrrr");
  return arr[0] * multiplyWithRecursion(arr.slice(1));
  // 1 * multiplyWithRecursion([2,3,4]);
  //1* 2 * multiplyWithRecursion([3,4]);
  // 1*2*3 * multiplyWithRecursion([4]);
  // 1*2*3*4
};
console.log(multiplyWithRecursion(arr));

const getRangeNumber = (start, end) => {
  if (start > end) {
    return [];
  } else {
    numbers = getRangeNumber(1, end - 1);
    numbers.push(end)
    return numbers
  }
};
console.log(getRangeNumber(0, 5),"range");
