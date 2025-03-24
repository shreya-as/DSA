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
    numbers.push(end);
    return numbers;
  }
};
console.log(getRangeNumber(0, 5), "range");
// palindrome
const isPalindrome = (arr) => {
  let reversedString = "";
  for (let i = arr.length-1; i >= 0; i--) {
    console.log(i,"iiiii")
    reversedString+=arr[i]
  }
  let org=arr.join(",").replace(/,/g,"")
  console.log(org.replace(/,/g,""),"orgorgorg")
  if(org===reversedString){
    return true
  }
  return -1
};
let arr1 = [1,2,1];
console.log(isPalindrome(arr1), "test");

//using recursion 
const isPalindromeUsingRecursion=(arr,updatedArr)=>{  
  console.log(updatedArr,"updatedArr")
  if(updatedArr?.length===0){
    return []
  }
  else{
    let reversedArray=isPalindromeUsingRecursion(arr,arr.slice(0,arr.length))
    return reversedArray

  }
}
console.log(isPalindromeUsingRecursion(arr1), "test");
