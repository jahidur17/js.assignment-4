function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let n = 0; n < arr1.length; n++) {
    if (arr1[n] === arr2[n]){
        return false;
    }
        
  }
  return true;
}
const result = isSame([1, 4, 6], [1, 4, 5]);
console.log(result);
