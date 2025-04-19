let arr1 = [1, 2, 3, 4, 5, 1];
let arr2 = [1, 4, 5, 23, 46, 1, 1];
function intersection() {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let isDuplicate = false;
      for (let k = 0; k < arr3?.length; k++) {
        if (arr3[k] === arr2[j]) {
          console.log("i am running");
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        if (arr1[i] === arr2[j]) {
          arr3 = [...arr3, arr1[i]];
        }
      }
    }
  }
  return arr3;
}
console.log(intersection());
